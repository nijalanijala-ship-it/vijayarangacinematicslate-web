import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Initialize Gemini SDK lazily to prevent startup crash if API key is missing
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Routes

// App logo redirection for manifest icon and PWA support
app.get("/app-logo.png", (req, res) => {
  res.sendFile(path.join(process.cwd(), "src/assets/images/vijayaranga_website_logo_1780391263351.png"));
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Pitch Story Generation endpoint
app.post("/api/pitch", async (req, res) => {
  try {
    const { genre, theme, customizedByUser, customTitle } = req.body;
    
    const client = getAiClient();
    
    const systemPrompt = `You are a world-class Hollywood & Tollywood blockbuster screenwriter and story consultant working for "VIJAYARANGA" (headed by the acclaimed Director, Screenwriter, and Storyteller of VIJAYARANGA). Your job is to draft screenplays, pitches, trailer outlines, and powerful Telugu/English voiceovers for high-concept blockbusters.

Create a highly suspenseful, thriller, mystery, or fast-paced cinematic movie concept based on the user's input.
Provide a clean JSON response with the schema defined. Make sure the Telugu voice over is extremely powerful, poetic, rhythmic, and punchy, capturing the epic blockbuster energy!`;

    const promptText = `Generate a cinematic movie blockbuster pitch.
Genre: ${genre || "Action Mystery Thriller"}
Theme/Concept ideas: ${theme || "A dark secret that holds the key to the future"}
Developer/Creator: VIJAYARANGA
${customTitle ? `Custom Title to use/refine: "${customTitle}"` : ""}

Make sure the storyboard has exactly 5 thrilling, intense, scenewise trailer beats. They must match:
Beat 1: The Inciting Darkness / Hook
Beat 2: The Rising Threat / Suspense
Beat 3: The Mystery Unfolded / Action Flash
Beat 4: The Peak Climactic Crisis / Screaming Visuals
Beat 5: The Majestic VR Resolution

Include a 10-second cinematic Telugu voiceover matching the style of:
"కొత్త కథల కోసం... థ్రిల్లింగ్ బ్లాక్బస్టర్ హిట్స్ కోసం... మీ కలలను తెరపైకి తీసుకురావడానికి... విజయరంగ గారిని సంప్రదించండి!"
Customize it subtly if needed to fit the generated movie genre/title while keeping the core brand pitch ("Stories That Create History") intact!`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["title", "tagline", "logline", "voiceoverTelugu", "voiceoverTranslation", "storyboard"],
          properties: {
            title: {
              type: Type.STRING,
              description: "An incredibly catchy, heavy-weight cinematic blockbuster movie title.",
            },
            tagline: {
              type: Type.STRING,
              description: "A punchy, high-impact cinematic movie tagline.",
            },
            logline: {
              type: Type.STRING,
              description: "A highly-compelling 1-2 sentence dramatic and thrilling story logline.",
            },
            voiceoverTelugu: {
              type: Type.STRING,
              description: "A beautiful, intense, blockbuster-level 4-line Telugu language voiceover script.",
            },
            voiceoverTranslation: {
              type: Type.STRING,
              description: "The English translation and subtext of the Telugu voiceover.",
            },
            storyboard: {
              type: Type.ARRAY,
              description: "Exactly 5 dynamic storyboard trailer events/scenes.",
              items: {
                type: Type.OBJECT,
                required: ["sceneNumber", "title", "description", "visualCue", "soundEffect"],
                properties: {
                  sceneNumber: { type: Type.INTEGER },
                  title: { type: Type.STRING, description: "Title of the trailer transition beat" },
                  description: { type: Type.STRING, description: "What happens in the scene frame" },
                  visualCue: { type: Type.STRING, description: "Detailed description of cinematic visuals, lighting, graphics, or actors." },
                  soundEffect: { type: Type.STRING, description: "The music vibe or critical audio cue (e.g., 'Heavy bass drop', 'High-pitched violin screech')" },
                },
              },
            },
          },
        },
      },
    });

    const resultText = response.text;
    res.json(JSON.parse(resultText || "{}"));
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({
      error: error.message || "Failed to generate cinematic blockbuster pitch.",
      fallbackData: {
        title: "SABOTAGE: THE WRITER'S DECREE",
        tagline: "Stories That Create History",
        logline: "An elite cypher specialist uncovers a countdown hidden in deep satellite signals, setting him against a shadow network before the grid goes pitch black.",
        voiceoverTelugu: "కొత్త కథల కోసం...\nమీ కలలను తెరపైకి తీసుకురావడానికి...\nవిజయరంగ గారిని సంప్రదించండి!",
        voiceoverTranslation: "To bring your majestic film dreams to life... contact VIJAYARANGA!",
        storyboard: [
          {
            sceneNumber: 1,
            title: "The Inciting Darkness",
            description: "Sparks drifting slowly up in cold, foggy black screen. A single, ominous green terminal blinking.",
            visualCue: "Slow camera push forward. Cold blue cinematic hues with floating golden embers.",
            soundEffect: "Distant sweeping wind pad transitioning to high-tech digital interference sound."
          },
          {
            sceneNumber: 2,
            title: "The Danger Rising",
            description: "Rapid heartbeat rhythm begins. Heavy shadow lines cross a panicked face looking at a massive wall of monitors.",
            visualCue: "Deep chiaroscuro contrast. Flashing amber warning light with ticking clock graphics layered.",
            soundEffect: "Heavy orchestral heartbeat stomps, building frequency every second."
          },
          {
            sceneNumber: 3,
            title: "Flashes of Action",
            description: "Rapid 1-second visual cuts: A car skidding sideways, a mysterious vault door heavy wheel turning, hands gripping blueprints in rain.",
            visualCue: "High lens flare. Aggressive camera panning. Saturated golden hues under pouring dark rain.",
            soundEffect: "Epic cinematic drum hits and soaring brass brass swells."
          },
          {
            sceneNumber: 4,
            title: "The Climax Reveal",
            description: "A brilliant blinding golden light explodes from the center of a futuristic mechanical iris slot.",
            visualCue: "Camera zooming extremely fast toward the shining iris center. Light particles fill the screen.",
            soundEffect: "Deafening cosmic riser effect culminating in a massive sub-bass explosion drop."
          },
          {
            sceneNumber: 5,
            title: "The Majestic VR Resolution",
            description: "A gorgeous, majestic golden VR logo emerges from the dissipating glowing white smoke overlay.",
            visualCue: "The camera zooms right through the logo into an ambient end screen displaying contact details.",
            soundEffect: "Sustained heavenly, epic orchestral string chord with a deep bell chime."
          }
        ]
      }
    });
  }
});

// Configure Vite or Static Asset delivery
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
