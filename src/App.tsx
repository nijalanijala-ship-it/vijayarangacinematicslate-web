import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  Sparkles, 
  Tv, 
  Send, 
  ChevronRight, 
  Film, 
  Clapperboard, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  Compass,
  FileText,
  BookmarkCheck,
  CheckCircle2,
  ListRestart,
  Download,
  BookOpen,
  Smartphone,
  Share2,
  AppWindow
} from "lucide-react";
import { audioSynth } from "./utils/audio";
import { StoryboardScene, CinematicConcept, SavedPitch } from "./types";

// Import generated majestic media assets
import goldenVrLogo from "./assets/images/vijayaranga_website_logo_1780391263351.png";
import cinematicAction from "./assets/images/cinematic_action_1780224055280.png";
import cinematicMystery from "./assets/images/cinematic_mystery_1780224069129.png";
import athmalingamPoster from "./assets/images/athmalingam_poster_1780242812688.png";
import manuscriptBg from "./assets/images/cinematic_studio_bg_1780391582493.png";

// Import dedicated project data and cinematic page details
import { ProjectDetail, projectsData } from "./data/projectsData";
import ProjectDetailPage from "./components/ProjectDetailPage";

export default function App() {
  const [language, setLanguage] = useState<"te" | "en">("te");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeScene, setActiveScene] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [selectedGenre, setSelectedGenre] = useState<string>("Action Mystery Thriller");
  const [customTheme, setCustomTheme] = useState<string>("A secure temple vault holding an ancient golden slate containing data that codebreakers are tracking.");
  const [customTitle, setCustomTitle] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(4500); // 4.5 seconds per scene transition
  const [errorString, setErrorString] = useState<string | null>(null);
  const [showAthmalingamSynopsis, setShowAthmalingamSynopsis] = useState<boolean>(false);

  // --- Progressive Web App (PWA) / Install App Engine ---
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallGuide, setShowInstallGuide] = useState<boolean>(false);
  const [isAppInstalled, setIsAppInstalled] = useState<boolean>(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                        (navigator as any).standalone === true || 
                        window.matchMedia('(display-mode: fullscreen)').matches;
    if (isStandalone) {
      setIsAppInstalled(true);
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    window.addEventListener('appinstalled', () => {
      setIsAppInstalled(true);
      setDeferredPrompt(null);
      try {
        audioSynth.playDeepImpact();
      } catch (err) {
        console.warn(err);
      }
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const triggerInstallAppAction = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsAppInstalled(true);
        setDeferredPrompt(null);
      }
    } else {
      setShowInstallGuide(true);
      try {
        audioSynth.playActionPulse();
      } catch (err) {
        console.warn(err);
      }
    }
  };

  // States for AI Director's Desk Dashboard
  const [deskActiveProject, setDeskActiveProject] = useState<ProjectDetail>(projectsData[0]);
  const [showDirectorOpinion, setShowDirectorOpinion] = useState<boolean>(false);
  const [directorOpinionTopic, setDirectorOpinionTopic] = useState<string>("Script Integrity");
  const [directorOpinionText, setDirectorOpinionText] = useState<string>("");
  const [isGeneratingOpinion, setIsGeneratingOpinion] = useState<boolean>(false);

  // Default Cinematic Pitch Setup (matches the developer prompt perfectly)
  const defaultConcept: CinematicConcept = {
    title: "SABOTAGE: THE WRITER'S DECREE",
    tagline: "Stories That Create History",
    logline: "An elite cypher specialist uncovers a countdown deep within ancient cinematic relics, triggering an intense race against codebreakers to decode the master key before the screen goes totally black.",
    voiceoverTelugu: "కొత్త కథల కోసం...\nథ్రిల్లింగ్ బ్లాక్బస్టర్ హిట్స్ కోసం...\nమీ కలలను తెరపైకి తీసుకురావడానికి...\nవిజయరంగ గారిని సంప్రదించండి!",
    voiceoverTranslation: "For brand new stories... for thrilling blockbuster hits... to bring your majestic dreams onto the silver screen... Contact VIJAYARANGA (Director | Screenwriter | Storyteller)!",
    storyboard: [
      {
        sceneNumber: 1,
        title: "The Inciting Darkness",
        description: "Drifting sparks arise slowly in cold fog. A heavy shadow outlines a single pulsating, ominous radar grid screen.",
        visualCue: "Slow camera push forward. Pitch black scene layered with cold blue cinematic hues and floating embers.",
        soundEffect: "Ominous digital sweeping wind pad / digital interference rumbles."
      },
      {
        sceneNumber: 2,
        title: "The Danger Rising",
        description: "Heavy orange shadow lines sweep across a panicked investigator tracking decrypt symbols spinning on a monitor grid.",
        visualCue: "Dense chiaroscuro contrast. Striking amber warning lights flashing slowly with ticking digital countdown indicators.",
        soundEffect: "Heavy heartbeat bass pulses and ticking sound effects."
      },
      {
        sceneNumber: 3,
        title: "Flashes of Action",
        description: "Fast-paced blockbuster scene flashes: Tyres skidding sideways in heavy downpour, a mechanical iris doors turning, and dark silhouettes chasing in shadows.",
        visualCue: "Aggressive camera panning with high lens flares. Deep dark rainy saturates with brilliant teal and crimson contrasts.",
        soundEffect: "Epic dramatic percussion and aggressive movie action riser."
      },
      {
        sceneNumber: 4,
        title: "The Climax Crisis",
        description: "A brilliant blinding golden light explodes from the center of a mechanical iris vault, capturing the ultimate suspension.",
        visualCue: "The camera zooms incredibly fast towards the golden core. Bright gold particles fill the screen.",
        soundEffect: "Deafening explosive riser culminating in a sub-bass blast drop."
      },
      {
        sceneNumber: 5,
        title: "The Majestic VR Resolution",
        description: "The majestic golden VR logo slowly emerges from the dissipating smoke, fading into pristine brand details.",
        visualCue: "Heavy gold steel VR logo glowing deeply under volumetric studio lights. Transitions to glowing contact details.",
        soundEffect: "Sustained heavenly, epic orchestral string chord with a resonant bell chime."
      }
    ]
  };

  const [activeConcept, setActiveConcept] = useState<CinematicConcept>(defaultConcept);
  
  // Local Portfolio of saved pitches
  const [savedPitches, setSavedPitches] = useState<SavedPitch[]>(() => {
    try {
      const stored = localStorage.getItem("vr_slate_saved_pitches");
      return stored ? JSON.parse(stored) : [
        {
          id: "default-pitch",
          genre: "Action Mystery Thriller",
          theme: "Ancient cryptographic slate countdown",
          concept: defaultConcept,
          createdAt: new Date().toLocaleDateString()
        }
      ];
    } catch {
      return [];
    }
  });

  // Contact form state
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactRole, setContactRole] = useState<string>("Producer / Investor");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  // References
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const playTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Canvas floating sparks renderer - Disabled for Starter Tier Optimization
  useEffect(() => {
    // Disabled to prevent continuous rendering and save local resources
  }, []);

  // Sync audio mute with engine state
  useEffect(() => {
    audioSynth.setMute(isMuted);
  }, [isMuted]);

  // Handle scene voice effects & actions
  const triggerSceneEffects = (sceneNum: number) => {
    if (isMuted) return;

    switch (sceneNum) {
      case 1:
        audioSynth.playDeepImpact();
        break;
      case 2:
        audioSynth.playTickingClock(4);
        break;
      case 3:
        audioSynth.playActionPulse();
        break;
      case 4:
        audioSynth.playClimaxExplosion();
        break;
      case 5:
        audioSynth.playGoldenResolution();
        break;
    }
  };

  // Set up auto-play scheduler
  useEffect(() => {
    if (isPlaying) {
      triggerSceneEffects(activeScene);
      playTimerRef.current = setTimeout(() => {
        setActiveScene((prev) => {
          const next = prev === 5 ? 1 : prev + 1;
          return next;
        });
      }, playbackSpeed);
    } else {
      if (playTimerRef.current) {
        clearTimeout(playTimerRef.current);
      }
    }

    return () => {
      if (playTimerRef.current) {
        clearTimeout(playTimerRef.current);
      }
    };
  }, [isPlaying, activeScene, activeConcept, playbackSpeed]);

  // Handle single manual step choice
  const handleSceneClick = (sceneNum: number) => {
    setActiveScene(sceneNum);
    triggerSceneEffects(sceneNum);
  };

  // Preset Story prompts to inspire producers
  const presets = [
    {
      title: "Ancient Crypt Sabotage",
      genre: "Suspense Mystery Thriller",
      prompt: "An ancient Sanskrit codebook carved inside a monolithic cave predicts modern satellite outages. A specialist enters the catacombs under high alert."
    },
    {
      title: "Chrono Grid Blackout",
      genre: "Action Sci-Fi Thriller",
      prompt: "A brilliant time-loop screenwriter realizes their movie is playing out in real-time within a secret military defense grid."
    },
    {
      title: "Telugu Heritage Vault",
      genre: "Mythological Epic Thriller",
      prompt: "A massive gold vault embedded under an old royal temple opens for exactly 10 minutes every solar eclipse, triggering a frantic team heist."
    }
  ];

  // Call Express API to invoke server-side Gemini 3.5 Flash 
  const generateNewConcept = async () => {
    setIsGenerating(true);
    setErrorString(null);

    // Stop current play
    setIsPlaying(false);

    try {
      const response = await fetch("/api/pitch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          genre: selectedGenre,
          theme: customTheme,
          customTitle: customTitle || undefined
        })
      });

      if (!response.ok) {
        throw new Error("Failed to contact the blockbuster studio screenplay backend.");
      }

      const generatedData: CinematicConcept = await response.json();
      
      // Update with generated concept
      setActiveConcept(generatedData);
      setActiveScene(1);
      
      // Save to local portfolio as well
      const newSaved: SavedPitch = {
        id: `pitch-${Date.now()}`,
        genre: selectedGenre,
        theme: customTheme,
        concept: generatedData,
        createdAt: new Date().toLocaleDateString()
      };

      const updatedList = [newSaved, ...savedPitches];
      setSavedPitches(updatedList);
      localStorage.setItem("vr_slate_saved_pitches", JSON.stringify(updatedList));

      // Trigger automatic trailer show on load with unmuted audio to showcase
      setIsMuted(false);
      setIsPlaying(true);
    } catch (err: any) {
      console.error(err);
      setErrorString("An error occurred. Utilizing elite offline script engine.");
      
      // Standalone sandbox cinematic fallback
      const offlineConcept: CinematicConcept = {
        title: `${customTitle || "SABOTAGE: THE WRITER'S DECREE"}`,
        tagline: "Stories That Create History",
        logline: "In deep satellite telemetry, a countdown begins to unlock a golden cryptographic core, setting a director off against clock stakes.",
        voiceoverTelugu: "కొత్త కథల కోసం...\nమీ కలలను తెరపైకి తీసుకురావడానికి...\nవిజయరంగ గారిని సంప్రదించండి!",
        voiceoverTranslation: "To bring your majestic film dreams to life... contact VIJAYARANGA!",
        storyboard: defaultConcept.storyboard
      };
      setActiveConcept(offlineConcept);
      setActiveScene(1);
    } finally {
      setIsGenerating(false);
    }
  };

  // Delete pitch from local catalog
  const deleteSavedPitch = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = savedPitches.filter(p => p.id !== id);
    setSavedPitches(filtered);
    localStorage.setItem("vr_slate_saved_pitches", JSON.stringify(filtered));
  };

  // Submit Contact consultation
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSubmitted(true);
    setTimeout(() => {
      // reset form
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    }, 4500);
  };

  const handleDeskProjectSelect = (proj: ProjectDetail) => {
    setDeskActiveProject(proj);
    if (!isMuted) {
      audioSynth.playDeepImpact();
    }
    // Synchronize the active cinematic concept player beneath with our desk selection
    setActiveConcept({
      title: proj.titleEnglish,
      tagline: proj.taglineEnglish,
      logline: proj.corePlot,
      voiceoverTelugu: `${proj.titleTelugu}! భారీ బడ్జెట్ దృశ్య కావ్యం! కథల సంకల్పం.. తెర వెనుక విప్లవం!`,
      voiceoverTranslation: proj.taglineEnglish + ". " + proj.corePlot,
      storyboard: proj.storyboard
    });
    setActiveScene(1);
  };

  const getDirectorLetter = (projId: string, topic: string) => {
    switch (projId) {
      case "mega-power":
        if (topic === "Script Integrity") {
          return {
            telugu: "మెగా పవర్ కథ రెండు శత్రు సేనల వైరం మరియు శాంతి స్థాపనే లక్ష్యంగా సాగే ఒక మహోద్వేగ భరిత ప్రయాణం. ప్రతి సీన్ లోనూ ఎమోషనల్ అంచు మరియు ఇంటెన్స్ యాక్షన్ బాలన్స్ చేశాం. మాస్ ప్రేక్షకులకు పూనకాలు తెప్పించేలా కార్తీక్ క్యారెక్టర్ ని డిజైన్ చేసాను. ఈ కథలో శాంతి స్థాపన కోసం వాడే వ్యూహం ప్రేక్షకుల గుండెను తాకుతుంది!",
            english: "Mega Power is an epic confrontation and peace-building family saga. Each scene carefully balances heavy heart-touching emotions with maximum mass action choreography. Characters are designed with extreme heroism."
          };
        } else if (topic === "VFX & Budget") {
          return {
            telugu: "120 - 150 కోట్ల భారీ బడ్జెట్ తో ప్లాన్ చేస్తున్నాం. 'ధూళి తుఫాను ఫైట్' (Dust Storm Arena) సీన్ లో 3D పార్టికల్ సిమ్యులేషన్స్ మరియు రాజస్థాన్ లోని చారిత్రక నైపథ్యాలు ఈ చిత్రానికి ప్రధాన ఆకర్షణ అవుతాయి.",
            english: "Scheduled with a grand budget of 120-150 Crores. Highly stylized dynamic 3D simulation for the 'Dust Storm Arena' and massive set work in Rajasthan will stand as major creative Highlights."
          };
        } else {
          return {
            telugu: "యూత్ అండ్ ఫ్యామిలీ ఆడియన్స్ లో అత్యంత ఆదరణ పొందే కథా విభాగం. తెలుగు తో పాటు హిందీ డిజిటల్ రైట్స్ కు కూడా అద్భుతమైన మార్కెట్ పొటెన్షియల్ ఉంది.",
            english: "Incredible market pull across South and North Indian territories with immense global theatrical scope."
          };
        }
      case "trishoolam":
        if (topic === "Script Integrity") {
          return {
            telugu: "త్రిశూలం ఒకే కథలో ముగ్గురు పవర్ఫుల్ అన్నదమ్ముల సమన్వయం. పవర్ శాప్ శంకర్ ఐపిఎస్ శాశ్వతంగా ఉండే క్యారెక్టర్. మైండ్-ఫోర్స్-లా ఈ త్రిశూల కలయిక ద్వారా సమాజంలోని క్షుద్ర వినాశక శక్తులను అంతమొందించే కథాంశం ఇది.",
            english: "Trishoolam coordinates Force, Law, and Brain into a single invincible weapon. A multi-star heavy drama depicting three direct brothers working to save the sovereignty of India against biological mafia groups."
          };
        } else if (topic === "VFX & Budget") {
          return {
            telugu: "100 - 130 కోట్ల బడ్జెట్. వైట్‌స్కేల్ ల్యాబరేటరీ మంచు చాపలు మరియు విశాఖ షిప్‌యార్డ్ క్లైమాక్స్ విఎఫ్ఎక్స్ అత్యంత రియలిస్టిక్ గా చూపిస్తాం.",
            english: "Planned at 100-130 Crores. Cutting-edge biochemical dispersion VFX and ocean-dock cargo ship siege simulations."
          };
        } else {
          return {
            telugu: "అతిపెద్ద మల్టీస్టారర్ కాంబినేషన్ కావున థియెట్రికల్ ఓపెనింగ్స్ రికార్డ్స్ సృష్టిస్తాయి. బాక్సాఫీస్ వద్ద విజయం ఖాయం అని నా పూర్తి నమ్మకం.",
            english: "Enormous Pan-Indian blockbuster potential with maximum initial weekend collections."
          };
        }
      case "parusavedi":
        if (topic === "Script Integrity") {
          return {
            telugu: "పరుసవేది ఒక పురాతన రసవాద సాహస యాత్ర. అగస్త్య మహర్షి ముద్రించిన ఐదు తాళపత్ర గ్రంథాల రికార్డులను బట్టి విక్రమ్ చేసే చారిత్రక ప్రయాణం ప్రేక్షకుడిని మెస్మరైజ్ చేస్తుంది. ప్రతి తాళం కూడా ఒక పజిల్ లా ఉంటుంది.",
            english: "Parusavedi explores the hidden alchemical stone of Agastya. Vikram's puzzle-solving archaeology journey through Bhairavakona, Hampi, Ahobilam and Varanasi is fully loaded with mystical elements."
          };
        } else if (topic === "VFX & Budget") {
          return {
            telugu: "100 - 120 కోట్ల బడ్జెట్. వారణాసి గంగా హారతి అండర్-వాటర్ చైతన్య గుహల రీ-క్రియేషన్ అత్యంత అద్భుతంగా ఉంటుంది.",
            english: "100-120 Crores scope. Rich VFX detailing of ancient temple structures and subterranean water caves of Agastya."
          };
        } else {
          return {
            telugu: "మిస్టరీ, అడ్వెంచర్ ఇష్టపడే ప్రపంచవ్యాప్త ప్రేక్షకులతో పాటు దేశీయ పురాణ ప్రేమికులకు నచ్చుతుంది. ఫ్రెంచైజీ విస్తరణకు అద్భుతమైన అవకాశం.",
            english: "High replication potential into regional adventure franchises and interactive media."
          };
        }
      case "athmalingam":
        if (topic === "Script Integrity") {
          return {
            telugu: "ఆత్మలింగం మా కెరీర్ లోనే లార్జెస్ట్ సోషియో-ఫాంటసీ హారర్-కామెడీ డ్రామాగా నిలుస్తుంది. రుద్రకోట మిర్రర్ ఫోర్ట్ (అద్దాల కోట) సెట్ లో జరిగే క్లైమాక్స్ సీక్వెన్స్ ప్రేక్షకులకు సరికొత్త అనుభూతిని ఇస్తుంది.",
            english: "Athmalingam balances terrifying supernatural mystery elements with lighthearted, side-splitting horror comedy blocks. The Mirror Maze climax is one of its kind."
          };
        } else if (topic === "VFX & Budget") {
          return {
            telugu: "80 - 100 కోట్ల బడ్జెట్. ఆత్మల సైన్యం ఎగిరే విజువల్స్ మరియు ఘోస్ట్ బ్రిడ్జ్ సీక్వెన్స్ కి అత్యున్నత సాంకేతికత వాడనున్నాము.",
            english: "80-100 Crores. Volumetric capture VFX representing thousands of serene souls flying towards the heaven gates."
          };
        } else {
          return {
            telugu: "హారర్-కామెడీ మార్కెట్ ఎప్పుడూ అత్యంత లాభదాయకమైనది. కుటుంబ సమేతంగా వచ్చి చూసే బ్లాక్బస్టర్ హిట్ అవుతుంది.",
            english: "Guaranteed family crowds with massive auxiliary theatrical and TV returns."
          };
        }
      case "mission-bharath":
        if (topic === "Script Integrity") {
          return {
            telugu: "మిషన్ భారత్ అనేది పాలిటికల్ ఆంధ్రా-కర్ణాటక సరిహద్దుల్లో జరిగే సామాజిక చైతన్య విప్లవం. స్కూల్ క్లర్క్ స్థాయి నుండి ఐఏఎస్ గా మారిన శివ ప్రయాణం మోటివేషనల్ గా ఉంటుంది. కుంభకోణాల్ని ఎండగడుతూ చెప్పబోయే ఈ కథ చాలా సామాజిక ప్రాముఖ్యత కలది.",
            english: "Mission Bharath is a highly inspiring, explosive political socio-drama tracking school clerk Shiva IAS in his state-wide audit battles against education cartel barons."
          };
        } else if (topic === "VFX & Budget") {
          return {
            telugu: "60 - 80 కోట్ల బడ్జెట్ కి తగినట్లు గ్రౌండెడ్ విజువల్స్. స్కూల్ వరదల సీన్ మరియు డిజిటల్ ఆడిట్ ఇన్ఫర్మేటివ్ హోలోగ్రామ్స్ ఈ చిత్రం ప్రత్యేకత.",
            english: "Grounded budget of 60-80 Crores. Immersive photorealistic monsoon storm and collapsing university infrastructure scene."
          };
        } else {
          return {
            telugu: "సహజమైన ఎమోషనల్ అప్పీల్ ఉండటం వలన ప్రతి విద్యార్థి మరియు తల్లిదండ్రుల హృదయాలకు తాకుతుంది. పన్ను మినహాయింపు దక్కే ఛాన్స్ కూడా ఉంది.",
            english: "Massive youth motivational pull guarantees consistent theatrical performance during festive release windows."
          };
        }
      default: // rudhiravanam
        if (topic === "Script Integrity") {
          return {
            telugu: "రుధిరవనం ప్రకృతి వర్సెస్ కార్పొరేట్ టెక్నాలజీ మధ్య జరిగే పోరాటం. అభిరామ్ ఉపయోగించే హై-టెక్ డ్రోన్లు ఒక పక్క, మేఘాలయ కొండలలో ఉద్భవించిన వనజ సాహసోపేత విలువిద్యా నైపుణ్యం మరోపక్క అబ్బురపరుస్తాయి.",
            english: "Rudhiravanam features an epic clash between natural tribal spirits and corporate excavation. Abhiram's insect micro-drones face Rudra's heavy excavators inside Meghalaya's primordial Blood Forest."
          };
        } else if (topic === "VFX & Budget") {
          return {
            telugu: "80 - 100 కోట్ల బడ్జెట్. గ్లోయింగ్ బ్లూ యురేనియం గనులు మరియు ప్రకృతి అందాల లష్ గ్రీన్ డ్రోన్ యుద్ధ సీక్వెన్స్ చిత్రానికి బలాలు.",
            english: "80-100 Crores budget. Avatar-style fluorescent bioluminescence, water river root bridge visuals, and drone swarm fights."
          };
        } else {
          return {
            telugu: "గ్లోబల్ గ్రీన్ ఎకాలజీ థీమ్ కనుక విదేశీ మార్కెట్లలో సైతం అద్భుతమైన కలెక్షన్స్ తీసుకువస్తుంది.",
            english: "High global distribution appeal due to international environmental concerns paired with high-concept sci-fi actions."
          };
        }
    }
  };

  const downloadAthmalingamPDF = () => {
    const content = `================================================================================
                                 SCREENPLAY PITCH BRIEF
                                      ఆత్మలింగం
                                    (ATHMALINGAM)
================================================================================

TAGLINE:
"మరణం తరువాతి రహస్యాన్ని దాచిన ఆత్మలింగం కోసం ఒక మహా యుద్ధం"
(The Great War for the Athmalingam - the Divine relic hiding the secret beyond death)

GENRE: Fantasy | Mystery | Adventure | Supernatural Thriller
WRITTEN, SCREENPLAY & DIRECTED BY: VIJAYARANGA
CONTACT PHONE: +91 9652579968
CONTACT EMAIL: bgrv5211@gmail.com
WEBSITE: VIJAYARANGA Cinematic Studio

--------------------------------------------------------------------------------
1. SYNOPSIS
--------------------------------------------------------------------------------
సృష్టి ఆరంభంలో ఏర్పడిన ఆత్మలింగం అనే దివ్యశక్తి వేల సంవత్సరాలుగా రహస్యంగా దాగి ఉంటుంది. 
రుద్రకోట, ఆత్మలు, శాపాలు, పురాతన రహస్యాల మధ్య హీరో సూర్యం తన అసలు 
వారసత్వాన్ని తెలుసుకుంటూ ఆత్మలింగాన్ని రక్షించడానికి చేసే ప్రయాణమే ఈ కథ.

--------------------------------------------------------------------------------
2. LOGLINE & STORY STRUCTURE
--------------------------------------------------------------------------------
At the dawn of creation, a divine fossil of absolute cosmic energy - the ATHMALINGAM - was 
secretly forged, locking in the ultimate threshold between life, death, and spatial 
realms. Hidden for thousands of years within the mystical forest fort of 
RUDRAKOTA, its seal is now under extreme threat of dark apocalyptic forces.

Our protagonist, SURYAM, an archaeologist's son plagued by recurring nightmares of 
burning black flames, returns to his native land Rudrakota. He is unaware of his deep 
blood lineage as the sworn guardians of the Athmalingam. Drawn into a web of ancient 
curses, restless spirits, and a high-stakes conspiracy, Suryam must awaken his true 
inner spiritual legacy before the dark moon eclipse reveals the sanctuary's coordinates 
and unleashes absolute chaos.

--------------------------------------------------------------------------------
3. CINEMATIC SCENE BEATS / STORYBOARD
--------------------------------------------------------------------------------
BEAT 1: THE FOREBODING SYMBOLS
An ancient scroll written by legendary saints is uncovered, describing the birth 
of the Athmalingam. An eerie mystical energy ripples through the sacred grounds.

BEAT 2: THE CURSE OF RUDRAKOTA
A series of supernatural events plagues the remote forest outpost. Screaming winds and 
spectral sightings rise as an old astronomical seal begins to shatter.

BEAT 3: THE AWAKENING
Suryam touches a dormant guardian obelisk. Majestic golden patterns erupt across his 
arms, revealing his cosmic hereditary blueprint and binding him directly to the relic's 
destiny.

BEAT 4: THE APOCALYPSE ASSAULT
A shadow cult initiates a massive siege on the ancient underground temple vaults of Rudrakota, 
unleashing cursed spectral spirits to overpower Suryam.

BEAT 5: THE EMERGENCE
Suryam stands at the center of the sanctuary. The Athmalingam completely manifests in 
sublime golden and cyan fire, disintegrating the shadow forces and restoring cosmic 
order.

--------------------------------------------------------------------------------
(C) 2026 VIJAYARANGA. All Rights Reserved. Telugu Premiere Slate.
================================================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ATHMALINGAM_Screenplay_Pitch_Brief.pdf"; // Download with PDF extension which has cross-platform plain-text structure
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleAthmalingamInterest = () => {
    // Fill contact form
    setContactRole("Producer / Investor");
    setContactName("Blockbuster Studio Investor");
    setContactEmail("investor@cinema.com");
    setContactMessage(`Hello VIJAYARANGA,\n\nI am extremely interested in co-producing or financing the fantasy/supernatural thriller project "ఆత్మలింగం (ATHMALINGAM)". Let's schedule a dedicated meeting with Director & Screenwriter VIJAYARANGA to hear the complete dialogue draft. Please share details.\n\nBest Regards.`);
    
    // Smooth scroll to contact form section
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Flash outline effect
      element.classList.add("ring-2", "ring-amber-500", "duration-500");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-amber-500");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen text-white bg-black flex flex-col font-sans relative antialiased selection:bg-[#bfa15f] selection:text-black pb-12">
      
      {/* Premium Full-Screen Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700 pointer-events-none opacity-40 animate-[slowPan_25s_infinite_ease-in-out]" 
        style={{ 
          backgroundImage: `url(${manuscriptBg})`,
        }}
        id="bg-manuscript-story"
      />
      {/* Overlay to keep the center area clean and blurred slightly with dark cinematic theme */}
      <div 
        className="fixed inset-0 z-0 backdrop-blur-[3px] bg-black/75 pointer-events-none" 
        id="bg-blur-readability"
      />
      {/* Subtle modern cinematic archive vignette */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(141,103,42,0.18)_100%)] pointer-events-none" />

      {/* Top Navigation HUD Banner */}
      <header style={{ background: "rgba(0,0,0,0.55)" }} className="border-b border-[#bfa15f]/25 bg-black/55 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-10 py-4 shadow-xl relative z-40 w-full text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo Brand Header */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 border border-[#bfa15f]/40 rounded-full bg-black/40 backdrop-blur-sm relative overflow-hidden group p-0 flex items-center justify-center shadow-md cursor-pointer" onClick={() => { setSelectedProject(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <img 
                src={goldenVrLogo} 
                alt="VR Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full aspect-square gold-glow-animated" 
              />
              <div className="absolute inset-0 bg-[#bfa15f]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <div className="cursor-pointer" onClick={() => { setSelectedProject(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <h1 className="text-sm sm:text-base font-bold tracking-[0.25em] text-[#bfa15f] uppercase font-display flex items-center gap-2 select-none">
                VS <span className="text-white text-xs sm:text-sm font-normal tracking-wide pl-2 border-l border-white/20 uppercase font-sans">
                  {language === "te" ? "విజయరంగ సినిమాటిక్ స్లేట్" : "Vijayaranga Cinematic Slate"}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#bfa15f] animate-pulse" />
              </h1>
              <p className="text-[9px] text-[#bfa15f]/70 font-mono tracking-widest uppercase font-bold">
                {language === "te" ? "దర్శకత్వం | స్క్రీన్‌ప్లే | కథకుడు" : "Director | Screenwriter | Storyteller"}
              </p>
            </div>
          </div>

          {/* Bilingual Navigation Menu - Requested precisely */}
          <nav className="flex items-center gap-1 sm:gap-4 font-semibold text-xs py-1">
            <ul className="list-none flex items-center gap-2 sm:gap-6 m-0 p-0">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="font-bold tracking-wider hover:text-white transition-all duration-300 px-2 py-1 text-sm border-b border-transparent hover:border-[#bfa15f]"
                  style={{ color: "#bfa15f", textDecoration: "none" }}
                >
                  {language === "te" ? "హోమ్" : "Home"}
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    setTimeout(() => {
                      document.getElementById("master-projects-catalog-deck")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }} 
                  className="text-white hover:text-[#bfa15f] transition-all duration-300 px-2 py-1 text-sm border-b border-transparent"
                >
                  {language === "te" ? "ప్రాజెక్టులు" : "Projects"}
                </a>
              </li>
              <li>
                <a 
                  href="#concepts" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    setTimeout(() => {
                      document.getElementById("teaser-block")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }} 
                  className="text-white hover:text-[#bfa15f] transition-all duration-300 px-2 py-1 text-sm border-b border-transparent"
                >
                  {language === "te" ? "కాన్సెప్ట్లు" : "Concepts"}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    setTimeout(() => {
                      document.getElementById("about-brand-section")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }} 
                  className="text-white hover:text-[#bfa15f] transition-all duration-300 px-2 py-1 text-sm border-b border-transparent"
                >
                  {language === "te" ? "గురించి" : "About"}
                </a>
              </li>
              <li>
                <a 
                  href="#ai-directors-desk" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    setTimeout(() => {
                      document.getElementById("ai-directors-desk")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }} 
                  className="text-white hover:text-[#bfa15f] transition-all duration-300 px-2 py-1 text-sm border-b border-transparent"
                >
                  {language === "te" ? "దర్శకుడి డెస్క్" : "Director Desk"}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }} 
                  className="text-white hover:text-[#bfa15f] transition-all duration-300 px-2 py-1 text-sm border-b border-transparent"
                >
                  {language === "te" ? "సంప్రదించండి" : "Contact"}
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Elegant Mobile/Desktop App Installer Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={triggerInstallAppAction}
              className="flex items-center gap-2 bg-gradient-to-r from-[#bfa15f] to-[#d6bc85] hover:from-[#bfa15f]/80 hover:to-[#d6bc85]/80 text-black px-4 py-1.5 rounded-full text-[11px] font-mono font-black uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer active:scale-95 hover:scale-103 shrink-0"
            >
              <Smartphone className="w-3.5 h-3.5 animate-pulse shrink-0" />
              <span>{language === "te" ? "యాప్ ఇన్‌స్టాల్" : "Install App"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-10 py-8 relative z-10 flex flex-col gap-10">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key="project-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectDetailPage
                project={selectedProject}
                onBack={() => {
                  setSelectedProject(null);
                  setTimeout(() => {
                    document.getElementById("master-projects-catalog-deck")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                onPlayStoryboard={(proj) => {
                  setActiveConcept({
                    title: proj.titleEnglish,
                    tagline: proj.taglineEnglish,
                    logline: proj.corePlot,
                    voiceoverTelugu: `${proj.titleTelugu}! భారీ బడ్జెట్ దృశ్య కావ్యం! కథల సంకల్పం.. తెర వెనుక విప్లవం!`,
                    voiceoverTranslation: proj.taglineEnglish + ". " + proj.corePlot,
                    storyboard: proj.storyboard
                  });
                  setActiveScene(1);
                  setSelectedProject(null);
                  setTimeout(() => {
                    document.getElementById("teaser-block")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                language={language}
              />
            </motion.div>
          ) : (
            <motion.div
              key="main-portal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              {/* AI దర్శకుడి డెస్క్ కంటైనర్ */}
              <section id="ai-directors-desk" className="ai-directors-desk-container">
                {/* Decorative ambient gold glow in the background */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#bfa15f]/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#bfa15f]/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />

                {/* LEFT SIDEBAR: Branding Sidebar */}
                <div className="branding-sidebar relative z-10 text-white">
                  <div className="flex flex-col items-center gap-4 w-full">
                    {/* Seal Image */}
                    <img 
                      src={goldenVrLogo} 
                      alt="Vijayaranga Screenplay & Director Seal" 
                      referrerPolicy="no-referrer"
                      className="seal-img"
                    />

                    <div className="branding-title font-sans">
                      VIJAYARANGA <br />
                      <span className="gold-text uppercase tracking-normal">SCREENPLAY BRIEF</span>
                    </div>
                  </div>

                  <div className="branding-tagline font-telugu text-slate-300 leading-relaxed font-bold">
                    {language === "te" ? "కథల వెనుక సంకల్పం.. తెర వెనుక విప్లవం!" : "Stories That Create History"}
                  </div>

                  <div className="flex flex-col gap-1 items-center">
                    <p className="text-[10px] text-[#bfa15f] font-mono tracking-widest uppercase font-black text-center">
                      {language === "te" ? "విజయరంగ సినిమాటిక్ స్లేట్" : "VIJAYARANGA CINEMATIC SLATE"}
                    </p>
                    <p className="text-[9px] text-zinc-400 font-mono tracking-wider uppercase font-bold text-center">
                      {language === "te" ? "సంప్రదించండి: 9652579968 వాట్సాప్" : "CONTACT NUMBER: 9652579968 WHATSAPP"}
                    </p>
                  </div>

                  {/* Quick Status Pill */}
                  <div className="w-full bg-black/50 border border-[#bfa15f]/25 p-2 rounded-lg text-center mt-auto">
                    <span className="text-[9px] font-mono text-[#bfa15f] tracking-widest uppercase font-black block">
                      ● {language === "te" ? "దర్శకుడి కన్సోల్ ఆన్" : "DIRECTOR CONSOLE ACTIVE"}
                    </span>
                  </div>
                </div>

                {/* MIDDLE SECTION: Cinematic Poster Dashboard */}
                <div className="slate-poster-dashboard relative z-10 text-white">
                  {/* Elegant Header */}
                  <div className="dashboard-header">
                    <h2 className="font-telugu font-black">
                      {language === "te" ? "విజయరంగ సినిమాటిక్ స్లేట్ 2026" : "VIJAYARANGA CINEMATIC SLATE 2026"}
                    </h2>
                    <p className="sub-heading font-mono uppercase font-black">
                      {language === "te" ? "6 బ్లాక్‌బస్టర్ హిట్ కాన్సెప్ట్స్ - ఇప్పటివరకు రాని కథలు" : "6 BLOCKBUSTER HIT CONCEPTS - UNTOLD STORIES"}
                    </p>
                  </div>

                  {/* 6 Image Grid Layout */}
                  <div className="movies-grid">
                    {projectsData.map((proj) => {
                      // Custom subtitle subtitles to display on the desk grid cards
                      let customEngSubtitle = "";
                      if (proj.id === "trishoolam") customEngSubtitle = "The Divine Brotherhood";
                      else if (proj.id === "mission-bharath") customEngSubtitle = "The Power of Signature";
                      else if (proj.id === "parusavedi") customEngSubtitle = "The Five Fragments";
                      else if (proj.id === "athmalingam") customEngSubtitle = "The Gate of Ghosts";
                      else if (proj.id === "mega-power") customEngSubtitle = "The System Mastermind";
                      else if (proj.id === "rudhiravanam") customEngSubtitle = "The Blood Forest";

                      const isActive = deskActiveProject.id === proj.id;

                      return (
                        <button
                          key={proj.id}
                          type="button"
                          onClick={() => handleDeskProjectSelect(proj)}
                          className={`movie-card ${isActive ? "active-card ring-1 ring-[#bfa15f]/50" : ""}`}
                        >
                          {/* Poster Image */}
                          <div className="aspect-[16/9] w-full relative overflow-hidden bg-black border-b border-zinc-800">
                            <img 
                              src={proj.poster} 
                              alt={proj.titleEnglish} 
                              referrerPolicy="no-referrer"
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                            />
                            {isActive && (
                              <div className="absolute inset-0 border-2 border-[#bfa15f] pointer-events-none" />
                            )}
                            <div className={`absolute top-2 left-2 w-2 h-2 rounded-full border border-black shadow z-10 ${
                              isActive ? "bg-green-500 animate-ping" : "bg-zinc-500"
                            }`} />
                            {isActive && (
                              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-green-500 z-10" />
                            )}
                          </div>

                          {/* Movie Info */}
                          <div className="movie-info">
                            <h3 className="font-telugu font-black text-[#bfa15f]">
                              {proj.titleTelugu}
                            </h3>
                            <p className="subtitle font-mono uppercase">
                              {proj.titleEnglish}
                            </p>
                            <span className="text-[9px] font-mono text-slate-400 block truncate font-bold uppercase mt-0.5">
                              {customEngSubtitle}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Dashboard Footer Text */}
                  <div className="dashboard-footer-text font-telugu">
                    "ప్రతి అక్షరం ఒక అస్త్రం.. ప్రతి సినిమా ఒక అద్భుతం..!"
                  </div>
                </div>

                {/* RIGHT SIDEBAR: AI Controls Panel */}
                <div className="ai-controls-sidebar relative z-10 text-white">
                  
                  {/* Story Analysis Control Box */}
                  <div className="control-box">
                    <h4 className="font-telugu font-black">
                      కథా విశ్లేషణ - AI సహాయం
                    </h4>
                    
                    {/* Simulated Analysis Progress Bars */}
                    <div className="analysis-bars">
                      {[
                        { label: language === "te" ? "కథా తీవ్రత" : "Story Level", key: "storyScore" },
                        { label: language === "te" ? "బహుళ-స్థితులు" : "Multi-States", key: "complexity" },
                        { label: language === "te" ? "కథా స్థితి" : "Story State", key: "execution" },
                        { label: language === "te" ? "విజువల్స్" : "VFX Weight", key: "vfx" }
                      ].map((barState) => {
                        let targetVal = 75;
                        const pId = deskActiveProject.id;
                        if (barState.key === "storyScore") {
                          if (pId === "mega-power") targetVal = 92;
                          else if (pId === "trishoolam") targetVal = 90;
                          else if (pId === "parusavedi") targetVal = 95;
                          else if (pId === "athmalingam") targetVal = 94;
                          else if (pId === "mission-bharath") targetVal = 88;
                          else targetVal = 93;
                        } else if (barState.key === "complexity") {
                          if (pId === "mega-power") targetVal = 85;
                          else if (pId === "trishoolam") targetVal = 96;
                          else if (pId === "parusavedi") targetVal = 92;
                          else if (pId === "athmalingam") targetVal = 80;
                          else if (pId === "mission-bharath") targetVal = 78;
                          else targetVal = 84;
                        } else if (barState.key === "execution") {
                          if (pId === "mega-power") targetVal = 98;
                          else if (pId === "trishoolam") targetVal = 94;
                          else if (pId === "parusavedi") targetVal = 90;
                          else if (pId === "athmalingam") targetVal = 92;
                          else if (pId === "mission-bharath") targetVal = 96;
                          else targetVal = 90;
                        } else { // vfx
                          if (pId === "mega-power") targetVal = 45;
                          else if (pId === "trishoolam") targetVal = 70;
                          else if (pId === "parusavedi") targetVal = 85;
                          else if (pId === "athmalingam") targetVal = 98;
                          else if (pId === "mission-bharath") targetVal = 48;
                          else targetVal = 90;
                        }

                        return (
                          <div key={barState.key} className="bar-container" title={`${barState.label}: ${targetVal}%`}>
                            <motion.div 
                              className="bar" 
                              initial={{ height: "0%" }}
                              animate={{ height: `${targetVal}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                            <span className="bar-label">{barState.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Script Improvement Console with D-Pad */}
                  <div className="control-box">
                    <h4 className="font-telugu font-black">
                      స్క్రిప్ట్ మెరుగుదల - సహకారం
                    </h4>

                    {/* PHYSICAL TOUCH D-PAD BUTTON LAYOUT */}
                    <div className="d-pad">
                      {/* Up Row */}
                      <div className="arrow-row">
                        <button 
                          type="button"
                          onClick={() => {
                            // Previous Scene
                            setActiveScene(prev => prev > 1 ? prev - 1 : 5);
                            if (!isMuted) audioSynth.playActionPulse();
                          }}
                          className="arrow font-black"
                          title="Teaser Previous Scene"
                        >
                          ▲
                        </button>
                      </div>

                      {/* Middle Row with Left, Center, Right */}
                      <div className="arrow-row flex items-center justify-center gap-2">
                        <button 
                          type="button"
                          onClick={() => {
                            // Toggle language
                            setLanguage(prev => prev === "te" ? "en" : "te");
                            if (!isMuted) audioSynth.playTickingClock(1);
                          }}
                          className="arrow font-black"
                          title="Toggle Language"
                        >
                          ◀
                        </button>

                        {/* Circle Center button */}
                        <button 
                          type="button"
                          onClick={() => {
                            if (!isMuted) audioSynth.playDeepImpact();
                            setIsGeneratingOpinion(true);
                            setTimeout(() => {
                              setIsGeneratingOpinion(false);
                            }, 1200);
                          }}
                          className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#bfa15f] to-[#cd9e4d] border border-black flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 active:scale-95 shrink-0"
                          title="Re-analyze script"
                        >
                          <div className={`w-2.5 h-2.5 bg-black rounded-full ${isGeneratingOpinion ? "animate-pulse" : ""}`} />
                        </button>

                        <button 
                          type="button"
                          onClick={() => {
                            // Toggle video playing
                            setIsPlaying(p => !p);
                            if (!isMuted) audioSynth.playTickingClock(1);
                          }}
                          className="arrow font-black"
                          title="Toggle Trailer Reel"
                        >
                          ▶
                        </button>
                      </div>

                      {/* Down Row */}
                      <div className="arrow-row">
                        <button 
                          type="button"
                          onClick={() => {
                            // Next Scene
                            setActiveScene(prev => prev < 5 ? prev + 1 : 1);
                            if (!isMuted) audioSynth.playActionPulse();
                          }}
                          className="arrow font-black"
                          title="Teaser Next Scene"
                        >
                          ▼
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full text-[8.5px] text-slate-400 font-mono font-bold mt-3">
                      <span>STATUS LEDs:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          SYS
                        </span>
                        <span className="flex items-center gap-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${isGeneratingOpinion ? "bg-amber-400 animate-ping" : "bg-[#bfa15f]"}`} />
                          RUN
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          SYNC
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Core Call-to-action Action Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!isMuted) {
                        audioSynth.playGoldenResolution();
                      }
                      // Seed custom letter depending on current active movie
                      const letters = getDirectorLetter(deskActiveProject.id, directorOpinionTopic);
                      setDirectorOpinionText(language === "te" ? letters.telugu : letters.english);
                      setShowDirectorOpinion(true);
                    }}
                    className="director-action-btn"
                  >
                    <span>
                      {language === "te" ? "దర్శకుడి అభిప్రాయం" : "Get Director's Opinion"}
                    </span>
                    <span className="btn-subtext">
                      {language === "te" ? "పూర్తి బాండెడ్ స్క్రిప్ట్ యాక్సెస్" : "BONDED SCREENPLAY ACCESS"}
                    </span>
                  </button>

                </div>

                  {/* MAJESTIC DIRECTOR STATEMENT LETTER MODAL */}
                  <AnimatePresence>
            {showDirectorOpinion && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              >
                <motion.div 
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  className="bg-zinc-950 border border-[#bfa15f]/60 max-w-xl w-full rounded-xl p-5 sm:p-7 relative overflow-hidden shadow-2xl flex flex-col gap-4 font-semibold text-slate-100"
                >
                  {/* Gold seal watermark background */}
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-5 pointer-events-none rounded-full overflow-hidden">
                    <img src={goldenVrLogo} alt="VR Watermark" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full aspect-square" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-[#bfa15f]/30 pb-3 gap-4 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-2">
                      <img src={goldenVrLogo} alt="VR Logo" referrerPolicy="no-referrer" className="w-8 h-8 object-cover rounded-full aspect-square border border-[#bfa15f]/30" />
                      <div>
                        <h4 className="text-[#bfa15f] font-mono tracking-widest text-[11px] font-black uppercase">
                          VIJAYARANGA SCREENPLAY BRIEF
                        </h4>
                        <span className="text-[8.5px] font-mono text-slate-400 font-bold uppercase block leading-none mt-0.5">
                          OFFICIAL DIRECT DIALOG PANEL
                        </span>
                      </div>
                    </div>
                    
                    {/* Select topic switcher inside modal too! */}
                    <div className="flex items-center gap-1 shrink-0">
                      {["Script Integrity", "VFX & Budget", "Market Value"].map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            if (!isMuted) audioSynth.playTickingClock(1);
                            setDirectorOpinionTopic(t);
                            const letters = getDirectorLetter(deskActiveProject.id, t);
                            setDirectorOpinionText(language === "te" ? letters.telugu : letters.english);
                          }}
                          className={`text-[8px] font-mono tracking-wider font-extrabold px-1.5 py-1 rounded uppercase cursor-pointer transition-all ${
                            directorOpinionTopic === t
                              ? "bg-[#bfa15f] text-black font-black"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          {t === "Script Integrity" ? (language === "te" ? "కథా సమగ్రత" : "Script") : t === "VFX & Budget" ? (language === "te" ? "విజువల్స్" : "VFX") : (language === "te" ? "విలువ" : "Market")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Letter body */}
                  <div className="space-y-4 py-2 flex-1 scroll-smooth">
                    <div className="flex justify-between items-baseline text-[10px] font-mono font-bold text-slate-450 border-b border-zinc-900 pb-1">
                      <span>PROJECT: {deskActiveProject.titleEnglish} // {deskActiveProject.titleTelugu}</span>
                      <span>DATE: 2026 OFFICIAL BRIEF</span>
                    </div>

                    <div className="bg-[#bfa15f]/5 border-l-2 border-[#bfa15f] p-4 rounded-r-lg mt-1">
                      <p className="text-xs sm:text-sm font-mono text-[#bfa15f] font-black leading-normal mb-1.5 flex items-center gap-1.5 uppercase">
                        <Clapperboard className="w-3.5 h-3.5 text-[#bfa15f]" />
                        Director Vijayaranga Statement:
                      </p>
                      <p className="text-sm font-telugu text-slate-200 leading-relaxed font-semibold">
                        {directorOpinionText}
                      </p>
                    </div>

                    {/* Interactive fully bonded script notice */}
                    <div className="bg-black/80 border border-zinc-900 p-3 rounded-lg flex items-center justify-between gap-3 text-[10.5px]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="font-mono text-slate-300 font-medium">
                          {language === "te" ? "స్క్రీన్‌ప్లే చట్టబద్ధంగా రిజిస్టర్ కాబడినది." : "Fully bonded screenplay is legally locked & registered."}
                        </span>
                      </div>
                      <button 
                        type="button"
                        onClick={() => {
                          setShowDirectorOpinion(false);
                          const contactSec = document.getElementById("contact");
                          if (contactSec) {
                            contactSec.scrollIntoView({ behavior: "smooth" });
                            setContactRole("Producer / Investor");
                            setContactMessage(
                              language === "te"
                                ? `నేను "${deskActiveProject.titleTelugu}" సినిమా కథకు ఫండింగ్ / సినిమా భాగస్వామ్యం కోసం దర్శకుడిని కలుసుకోవాలనుకుంటున్నాను.`
                                : `I want to schedule a pitching meeting with the director to acquire/co-produce "${deskActiveProject.titleEnglish}".`
                            );
                          }
                        }}
                        className="text-[9px] font-mono text-black font-black bg-gradient-to-r from-yellow-500 to-amber-500 px-3 py-1.5 rounded uppercase hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                      >
                        {language === "te" ? "మీటింగ్ బుక్ చేయండి" : "Request Pitch"}
                      </button>
                    </div>
                  </div>

                  {/* Footer control close inside modal */}
                  <div className="flex justify-end pt-2 border-t border-zinc-900">
                    <button
                      type="button"
                      onClick={() => setShowDirectorOpinion(false)}
                      className="px-4 py-2 border border-[#bfa15f]/30 hover:border-[#bfa15f] text-slate-350 hover:text-white rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                    >
                      {language === "te" ? "మూసివేయండి" : "Close Statement"}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* SECTION: FEATURED CONCEPT (ATHMALINGAM) */}
        <section id="featured-concept" className="bg-zinc-950 border border-[#bfa15f]/30 rounded-xl p-5 sm:p-7 relative overflow-hidden text-white flex flex-col gap-4">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#bfa15f]/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex flex-col gap-6 relative z-10 w-full h-full">
            
            <div className="flex flex-col gap-4">

              <div className="border-b border-[#bfa15f]/25 pb-3">
                <span className="text-[10px] font-mono text-[#bfa15f] uppercase tracking-widest font-bold">
                  {language === "te" ? "ప్రస్తుత ఫీచర్డ్ కాన్సెప్ట్" : "CURRENT FEATURED CONCEPT"}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold font-telugu text-white mt-1 uppercase">
                  {language === "te" ? "ఆత్మలింగం" : "Athmalingam"} <span className="text-[#bfa15f] text-xs font-sans tracking-wider border-l border-white/20 pl-2 font-normal uppercase font-mono">The Gate of Ghosts</span>
                </h2>
              </div>

              <div className="text-sm font-telugu text-slate-300 leading-relaxed font-semibold italic bg-black/40 border-l-2 border-[#bfa15f] p-3 rounded-r-lg">
                <p>
                  {language === "te" 
                    ? "సృష్టి ఆరంభంలో ఏర్పడిన ఆత్మలింగం అనే దివ్యశక్తి వేల సంవత్సరాలుగా రహస్యంగా దాగి ఉంటుంది. రుద్రకోట, ఆత్మలు, శాపాలు, పురాతన రహస్యాల మధ్య హీరో సూర్యం తన అసలు వారసత్వాన్ని తెలుసుకుంటూ ఆత్మలింగాన్ని రక్షించడానికి చేసే ప్రయాణమే ఈ కథ."
                    : "At the dawn of creation, the divine power of Athmalingam has been secretly hidden for thousands of years. Amidst the ancestral spirits, ancient curses, and mystical ruins of Rudrakota, our hero Suryam uncovers his hidden heritage to protect the spatial cosmic balance."
                  }
                </p>
              </div>

              {/* READ SYNOPSIS DRAWER TOGGLE PANEL */}
              <AnimatePresence>
                {showAthmalingamSynopsis && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden bg-black/60 backdrop-blur-md border border-[#bfa15f]/30 rounded-lg p-4 mt-2 space-y-3 shadow-md text-slate-100"
                  >
                    <div className="border-b border-[#bfa15f]/25 pb-2">
                      <h5 className="text-xs font-mono text-[#bfa15f] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                        <BookOpen className="w-3.5 h-3.5" />
                        {language === "te" ? "పూర్తి కథా విశ్లేషణ మరియు వివరాలు" : "Complete Story Treatment Details"}
                      </h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed font-sans font-semibold">
                      <div className="space-y-2">
                        <p>
                          <strong className="text-[#bfa15f] block font-display font-medium">The Lore of Athmalingam:</strong>
                          At the dawn of creation, the cosmic deities sealed the final energetic door between mortal life and the spiritual afterworld inside the relic of Athmalingam. Left in the heavy preservation custody of ancient sages, its temple coordinates were masked behind deadly puzzles and the divine landscape of Rudrakota.
                        </p>
                        <p>
                          <strong className="text-[#bfa15f] block font-display font-medium">The Protagonist Suryam:</strong>
                          An accomplished modern archaeologist who begins to bleed from his fingers whenever he speaks ancient Sanskrit. Upon visiting the ruins of Rudrakota to discover his missing father's logs, he discovers he is the last bloodline guardian of the holy crest.
                        </p>
                      </div>
                      <div className="space-y-2 border-l border-[#bfa15f]/20 pl-0 md:pl-4">
                        <p>
                          <strong className="text-[#bfa15f] block font-display font-medium">Antagonist & Conflict:</strong>
                          A ruthless underground occult organization, led by a rogue scholar who knows the secret to siphon the Athmalingam's cosmic power during the alignment of solar bodies. Suryam must battle ancient curses, spectral warriors and modern mercenary forces to shield the cradle of creation.
                        </p>
                        <div className="bg-black/80 backdrop-blur-md p-2.5 rounded border border-[#bfa15f]/30 font-mono text-[10px]">
                          <span className="text-[#bfa15f] font-bold block">📽️ Director's Vision Notes</span>
                          "Visually matching the scale of classic fantasy adventures with modern dark supernatural horror. Intense color grids of glowing high-saturation cyan/turquoise contrast with rich organic golden temple fires."
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INTERACTIVE ACTION HUB BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#bfa15f]/25 mt-auto">
              
              {/* READ SYNOPSIS BUTTON */}
              <button
                type="button"
                onClick={() => setShowAthmalingamSynopsis(!showAthmalingamSynopsis)}
                className={`text-xs font-semibold px-4 py-2.5 rounded font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  showAthmalingamSynopsis 
                    ? "bg-[#bfa15f] text-black shadow-md font-bold"
                    : "bg-black/60 border border-[#bfa15f]/40 text-slate-200 hover:text-white hover:bg-zinc-805/40 backdrop-blur-sm"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                {showAthmalingamSynopsis 
                  ? (language === "te" ? "వివరణను మూసివేయండి" : "Collapse Synopsis") 
                  : (language === "te" ? "కథా వివరణ చదవండి" : "Read Synopsis")}
              </button>

              {/* DOWNLOAD PDF BRIEF */}
              <button
                type="button"
                onClick={downloadAthmalingamPDF}
                className="bg-black/60 hover:bg-zinc-850/40 border border-[#bfa15f]/40 text-slate-200 hover:text-white backdrop-blur-sm text-xs font-semibold px-4 py-2.5 rounded font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                title="Download complete Story Presentation in PDF structure"
              >
                <Download className="w-4 h-4 text-[#bfa15f]" />
                {language === "te" ? "ఫీచర్ పిచ్ పిడిఎఫ్ డౌన్‌లోడ్" : "Download PDF Brief"}
              </button>

              {/* PRODUCER INTEREST TRIGGER */}
              <button
                type="button"
                onClick={() => {
                  const contactSec = document.getElementById("contact");
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: "smooth" });
                    setContactRole("Producer / Investor");
                    setContactMessage(
                      language === "te"
                        ? "నేను \"ఆత్మలింగం (ATHMALINGAM)\" చిత్రాన్ని సహ-నిర్మించడానికి దయచేసి మాతో చర్చించగలరు. నేను పూర్తి స్క్రిప్ట్‌పై ఆసక్తిగా ఉన్నాను!"
                        : "I am interested in co-producing the movie project \"ఆత్మలింగం (ATHMALINGAM)\". We would love to review the complete treatment paper!"
                    );
                  }
                }}
                className="primary-btn text-black transition-all hover:scale-105 active:scale-95 text-xs font-extrabold px-4 py-2.5 rounded font-mono uppercase tracking-wider shadow-[0_3px_12px_rgba(191,161,95,0.35)] flex items-center gap-1.5 cursor-pointer"
              >
                <Clapperboard className="w-4 h-4 text-black fill-black" strokeWidth={2.5} />
                {language === "te" ? "నిర్మాత ఆసక్తిని తెలుపండి" : "Producer Interest"}
              </button>

            </div>

          </div>

        </section>

        {/* SECTION: CINEMATIC ENGINE TEASER & MULTIMEDIA CORNER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10" id="teaser-block">
          
          {/* LEFT: THE INTERACTIVE GRAPHICS ENGINE (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            <div className="flex items-center justify-between border-b border-[#bfa15f]/30 pb-2">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#bfa15f]" />
                <span className="text-xs font-mono tracking-widest text-slate-300 uppercase font-bold">
                  {language === "te" ? "సినిమాటిక్ టీజర్ ప్లేయర్ v2.0" : "Cinematic Teaser Player Engine v2.0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-black bg-[#bfa15f] px-2 py-0.5 rounded border border-[#bfa15f]/30 uppercase font-bold">
                  {language === "te" ? "సజీవ సీన్" : "Active Scene"}: {activeScene} / 5
                </span>
              </div>
            </div>

            {/* THE TEASER PLAYER SCREEN */}
            <div id="teaser-player-canvas" className="relative aspect-video w-full rounded-lg border-2 border-[#bfa15f]/40 bg-black overflow-hidden shadow-[0_12px_45px_rgba(191,161,95,0.2)] group relative z-10">
              
              {/* Smoke / Mist ambient simulation backdrops */}
              <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />

              {/* 5 Distinct Cinematic Scene Canvas Boards with Transitions */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  
                  {/* SCENE 1: The Inciting Darkness */}
                  {activeScene === 1 && (
                    <motion.div 
                       key="scene-1"
                       className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-b from-black via-zinc-950/95 to-zinc-900"
                       initial={{ opacity: 0, scale: 0.98 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 1.02 }}
                       transition={{ duration: 0.6 }}
                    >
                      {/* Technical Grid Accent Overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(#bfa15f_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                      
                      {/* Scene Title HUD */}
                      <div className="z-20 font-mono text-[10px] text-[#bfa15f] tracking-[0.3em] uppercase font-bold">
                        {language === "te" ? "సీన్ 1 // కథా ప్రారంభం" : "Beat 1 // The Inciting Darkness"}
                      </div>

                      {/* Visual Center */}
                      <div className="z-20 my-auto text-center max-w-xl mx-auto space-y-4">
                        <motion.h3 
                          className="text-2xl sm:text-4xl font-display font-medium text-[#bfa15f] tracking-tight font-bold"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {language === "te" ? "కొత్త కథల కోసం చూస్తున్నారా?" : "Looking for New Stories?"}
                        </motion.h3>
                        <p className="text-sm text-slate-300 font-mono tracking-wide font-semibold">
                          {activeConcept.storyboard[0]?.description || "A deep digital countdown begins on ancient temple tablets."}
                        </p>
                      </div>

                      {/* Sub-directives */}
                      <div className="z-20 flex justify-between items-center text-[10px] font-mono text-[#bfa15f]/70 font-bold">
                        <span>CRI: GOLD_ROYAL_DECR_LOCK</span>
                        <span>SFX: Ambient acoustic synth pad</span>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 2: The Rising Threat / Suspense */}
                  {activeScene === 2 && (
                    <motion.div 
                      key="scene-2"
                      className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 overflow-hidden bg-zinc-950"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Moody Mystery Backdrop */}
                      <img 
                        src={cinematicMystery} 
                        alt="Suspense Backdrop"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 select-none"
                        style={{ filter: "brightness(0.6) contrast(1.1) grayscale(0.2)" }}
                      />
                      
                      <div className="z-20 font-mono text-[10px] text-[#bfa15f] tracking-[0.3em] uppercase font-bold">
                        {language === "te" ? "సీన్ 2 // పెరుగుతున్న ఉత్కంఠ" : "Beat 2 // The Danger Rising"}
                      </div>

                      <div className="z-20 my-auto text-center max-w-xl mx-auto space-y-4">
                        <motion.span 
                          className="inline-block text-[10px] tracking-[0.4em] font-mono font-bold text-[#bfa15f] uppercase px-3 py-1 bg-black/80 border border-[#bfa15f]/40 backdrop-blur-sm"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                        >
                          {language === "te" ? "థ్రిల్లింగ్ బ్లాక్బస్టర్లు" : "THRILLING BLOCKBUSTERS"}
                        </motion.span>
                        <h3 className="text-xl sm:text-3xl font-display font-bold text-[#bfa15f] tracking-widest uppercase">
                          {activeConcept.title}
                        </h3>
                        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-semibold">
                          {activeConcept.storyboard[1]?.description}
                        </p>
                      </div>

                      <div className="z-20 flex justify-between items-center text-[10px] font-mono text-[#bfa15f] bg-black/80 backdrop-blur-md border border-[#bfa15f]/30 px-3 py-1 rounded shadow font-bold">
                        <span>CAMERA: CHIAROSCURO STATIC PUSH</span>
                        <span>AUDIO: Hearts pounding (ticking)</span>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 3: Flashes of Action */}
                  {activeScene === 3 && (
                    <motion.div 
                      key="scene-3"
                      className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 overflow-hidden bg-zinc-950"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0.7, 1], // cinematic camera shutter flash effect
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Action Backdrop */}
                      <img 
                        src={cinematicAction} 
                        alt="Action Backdrop"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover scale-110 select-none opacity-30 brightness-90"
                      />
                      
                      <div className="z-20 font-mono text-[10px] text-[#bfa15f] tracking-[0.3em] uppercase font-bold">
                        {language === "te" ? "సీన్ 3 // అద్భుతమైన యాక్షన్ సీన్లు" : "Beat 3 // Epic Action Sequence"}
                      </div>

                      <div className="z-20 my-auto text-center max-w-xl mx-auto py-2 bg-black/80 backdrop-blur-md rounded border border-[#bfa15f]/30 p-4 shadow-md text-white">
                        <p className="text-[#bfa15f] text-[10px] font-mono uppercase tracking-[0.36em] font-bold">{language === "te" ? "నిరంతర ఉత్కంఠ" : "Suspense Unleashed"}</p>
                        <h4 className="text-[#bfa15f] text-lg sm:text-2xl font-bold tracking-tight uppercase font-display">
                          "Stories That Create History"
                        </h4>
                        <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto font-semibold">
                          {activeConcept.storyboard[2]?.description}
                        </p>
                      </div>

                      <div className="z-20 flex justify-between items-center text-[10px] font-mono text-amber-500 bg-black/80 backdrop-blur-md border border-[#bfa15f]/30 px-2 py-1 rounded shadow-md font-bold">
                        <span>SYSTEM: SHUTTER_GOLD</span>
                        <span>SFX: Aggressive drum strike</span>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 4: The Climax Crisis */}
                  {activeScene === 4 && (
                    <motion.div 
                      key="scene-4"
                      className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-br from-black via-zinc-900 to-[#12100b]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Flash elements */}
                      <motion.div 
                        className="absolute inset-0 bg-[#bfa15f]/20"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 1.0 }}
                      />

                      <div className="z-20 font-mono text-[10px] text-[#bfa15f] tracking-[0.3em] uppercase font-bold">
                        {language === "te" ? "సీన్ 4 // క్లైమాక్స్ క్షణాలు" : "Beat 4 // Vault Breakthrough"}
                      </div>

                      <div className="z-20 my-auto text-center max-w-xl mx-auto space-y-4">
                        <motion.h4 
                          className="text-2xl sm:text-5xl font-extrabold text-[#bfa15f] tracking-[0.15em] gold-glow-animated"
                          animate={{ scale: [0.95, 1.05, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          THE CLIMAX
                        </motion.h4>
                        <p className="text-sm font-mono text-slate-200 font-bold">
                          {activeConcept.storyboard[3]?.description || "A brilliant blinding golden light explodes from the heavy vault iris slot."}
                        </p>
                      </div>

                      <div className="z-20 flex justify-between items-center text-[10px] font-mono text-[#bfa15f] bg-black/80 backdrop-blur-sm border border-[#bfa15f]/30 p-1 px-2.5 rounded font-bold">
                        <span>DIRECTIVE: HIGH_ZOOM_SPEED</span>
                        <span>AUDIO: Sub-bass resonance blast</span>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 5: Golden VR Logo Return & Contact (PROMO DRAMATIC ENDING) */}
                  {activeScene === 5 && (
                    <motion.div 
                      key="scene-5"
                      className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 overflow-hidden"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Sparkling background particles */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(191,161,95,0.18)_0%,transparent_70%)]" />

                      <div className="z-20 font-mono text-[10px] text-[#bfa15f] tracking-[0.3em] uppercase flex items-center justify-between font-bold">
                        <span>{language === "te" ? "శుభం // క్లైమాక్స్ ముగింపు" : "Dramatic Resolution"}</span>
                        <span>VIJAYARANGA</span>
                      </div>

                      {/* Golden VR Logo Slow Emergence */}
                      <div className="z-20 my-auto text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
                        <motion.div 
                          className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-[#bfa15f]/40 bg-zinc-950 p-0 flex items-center justify-center overflow-hidden shadow-lg aspect-square"
                          initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          transition={{ duration: 1.5, type: "spring" }}
                        >
                          <img 
                            src={goldenVrLogo} 
                            alt="VR Logo"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover rounded-full aspect-square gold-glow-animated" 
                          />
                        </motion.div>

                        <div className="space-y-1 mt-2">
                           <p className="text-[10px] tracking-[0.5em] font-mono text-[#bfa15f] font-bold uppercase">
                             {language === "te" ? "దర్శకత్వం:" : "PRODUCED BY:"}
                           </p>
                           <h2 className="text-lg sm:text-2xl font-bold tracking-[0.3em] text-[#bfa15f] uppercase font-display">
                             VIJAYARANGA
                           </h2>
                           <p className="text-xs text-[#bfa15f]/80 font-mono italic font-bold">
                             "Stories That Create History"
                           </p>
                        </div>

                        {/* Interactive contact call snippet inside ending screen */}
                        <motion.div 
                          className="bg-black/80 backdrop-blur-md border border-[#bfa15f]/30 p-2.5 px-4 rounded max-w-sm mt-1 shadow-md text-white font-semibold"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <p className="text-[10px] text-[#bfa15f] font-mono font-bold">🎬 {language === "te" ? "సంప్రదించండి:" : "Contact Now:"}</p>
                          <p className="text-xs text-white font-bold tracking-widest font-mono select-all">📞 +91 9652579968</p>
                          <p className="text-xs text-[#bfa15f] font-mono select-all font-bold">✉️ bgrv5211@gmail.com</p>
                        </motion.div>
                      </div>

                      {/* Footer elements */}
                      <div className="z-20 text-[9px] font-mono text-center text-[#bfa15f]/70 uppercase tracking-widest font-bold">
                        🎬 Production Co-Developers & Authors Welcome // 4K Cinematic Render
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Voiceover Telugu lyrics synchronized subtitles tray overlaying screen bottom */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-11/12 max-w-xl bg-black/85 backdrop-blur-md border border-[#bfa15f]/30 rounded p-2.5 py-2 text-center text-xs text-white shadow-md font-semibold">
                <p className="text-[#bfa15f] font-bold font-mono text-[9px] uppercase tracking-wider mb-0.5">
                  🎙️ {language === "te" ? "వాయిస్ ఓవర్ అనువాద ఉపశీర్షికలు" : "Telugu Voice Over Translation Subtitles (10 Sec)"}
                </p>
                <div className="font-sans leading-relaxed text-slate-200 text-[11px] sm:text-xs font-bold">
                  {activeScene === 1 && (language === "te" ? "కొత్త కథల కోసం... (For brand new stories...)" : "For brand new stories...")}
                  {activeScene === 2 && (language === "te" ? "థ్రిల్లింగ్ బ్లాక్బస్టర్ హిట్స్ కోసం... (For thrilling blockbuster hits...)" : "For thrilling blockbuster hits...")}
                  {activeScene === 3 && (language === "te" ? "మీ కలలను తెరపైకి తీసుకురావడానికి... (To bring your majestic screen dreams to life...)" : "To bring your majestic screen dreams to life...")}
                  {activeScene === 4 && (language === "te" ? "విజయరంగ గారిని సంప్రదించండి! (Contact VIJAYARANGA!)" : "Contact VIJAYARANGA!")}
                  {activeScene === 5 && (
                    <span className="text-[#bfa15f] font-bold tracking-wide">
                      VIJAYARANGA - "Stories That Create History"
                    </span>
                  )}
                </div>
              </div>

              {/* PROGRESS BAR */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-zinc-800 overflow-hidden z-20">
                <motion.div 
                  className="bg-[#bfa15f] h-full w-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={isPlaying ? { scaleX: [0, 1] } : { scaleX: (activeScene - 1) / 4 }}
                  transition={isPlaying ? { duration: playbackSpeed / 1000, ease: "linear" } : { duration: 0.2 }}
                  key={`progress-${activeScene}-${isPlaying}`}
                />
              </div>

            </div>

            {/* PLAYER CONTROLS HUB */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 p-3 sm:px-5 rounded-lg shadow-md text-white">
              
              {/* Play / Mute Toggles */}
              <div className="flex items-center gap-3">
                <button
                  id="btn-play-pause"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center justify-center gap-2 primary-btn text-black font-bold font-mono text-xs uppercase px-4 py-2 rounded shadow-[0_3px_12px_rgba(191,161,95,0.3)] duration-300 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-black text-black" />
                      {language === "te" ? "రీల్ నిలిపివేయి" : "Pause Reel"}
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-black text-black" />
                      {language === "te" ? "ప్రోమో రీల్ ప్లే చేయి" : "Play Promo Reel"}
                    </>
                  )}
                </button>

                <button
                  id="btn-sound-toggle"
                  onClick={() => setIsMuted(!isMuted)}
                  className={`flex items-center justify-center p-2 rounded border h-8 w-8 transition-all cursor-pointer ${
                    isMuted 
                      ? "border-red-500/40 text-red-500 bg-red-950/40 hover:bg-red-900/40" 
                      : "border-green-500/40 text-green-500 bg-green-950/40 hover:bg-green-900/40"
                  }`}
                  title={isMuted ? "Unmute Cinematic Synths" : "Mute Sound"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 animate-pulse" /> : <Volume2 className="w-3.5 h-3.5 animate-bounce" />}
                </button>

                <button
                  id="btn-reset-scene"
                  onClick={() => handleSceneClick(1)}
                  className="p-2 border border-[#bfa15f]/30 bg-black/40 rounded text-slate-300 hover:text-[#bfa15f] hover:bg-zinc-800/40 h-8 w-8 transition-all font-bold cursor-pointer"
                  title="Reset Reel to Start"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Frame Steppers */}
              <div className="flex gap-1.5 items-center">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSceneClick(idx)}
                    className={`w-7 h-7 rounded text-xs font-mono font-bold transition-all border cursor-pointer ${
                      activeScene === idx
                        ? "bg-[#bfa15f] text-black border-[#bfa15f] shadow-sm"
                        : "bg-black/50 text-slate-300 border-[#bfa15f]/30 hover:bg-[#bfa15f]/20 hover:text-[#bfa15f]"
                    }`}
                  >
                    0{idx}
                  </button>
                ))}
              </div>

            </div>

            {/* SYNC VOICE OVER SCRIPT TELEGU BANNER & BRAND DESCRIPTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Voice over info */}
              <div className="bg-white/70 backdrop-blur-md border border-[#cd9e4d]/30 rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-bl-3xl pointer-events-none" />
                <h4 className="text-xs font-mono text-[#ba904c] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <span>🎙️ Telugu Voice Over Script</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ba904c] animate-pulse" />
                </h4>
                <p className="text-sm font-bold text-[#0a1e3d] italic leading-relaxed whitespace-pre-line font-display pl-2 border-l border-[#cd9e4d]/40">
                  {activeConcept.voiceoverTelugu}
                </p>
              </div>

              {/* Dynamic Synopsis Info */}
              <div className="bg-white/70 backdrop-blur-md border border-[#cd9e4d]/30 rounded-lg p-4 flex flex-col gap-2 shadow-md">
                <span className="text-xs font-mono text-[#ba904c] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <Clapperboard className="w-3.5 h-3.5 text-[#ba904c]" />
                  Active Movie Logline
                </span>
                <p className="text-xs text-[#0a1e3d] leading-relaxed italic font-bold">
                  "{activeConcept.logline}"
                </p>
                <div className="flex items-center gap-1 text-[10px] text-[#ba904c] font-mono mt-1 font-bold">
                  <span>Tagline:</span>
                  <span className="text-[#0a1e3d]">"{activeConcept.tagline}"</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: REAL-TIME STORY PITCHING & STUDIO SPECIFIERS (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6" id="pitch-deck-creator">
            
            {/* BRAND HERO CARD - DIRECTOR SUMMARY */}
            <div className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-lg p-5 flex flex-col gap-3 relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="absolute -right-3 -bottom-3 text-[#bfa15f]/5 transition-transform duration-500 group-hover:scale-110">
                <Film className="w-24 h-24 stroke-[1]" />
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <img 
                  src={goldenVrLogo} 
                  alt="VR Logo" 
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 object-cover rounded-full aspect-square border border-[#bfa15f]/30 gold-glow-animated" 
                />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#bfa15f]">VIJAYARANGA</h3>
                  <p className="text-[10px] font-mono text-slate-300 font-bold">
                    {language === "te" ? "దర్శకుడు | స్క్రీన్ రైటర్ | కథకుడు" : "Director | Screenwriter | Storyteller"}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-semibold relative z-10">
                {language === "te" 
                  ? "గొప్ప సినిమా వాతావరణం, ఉత్కంఠభరితమైన కథలు మరియు చారిత్రక కథాంశాలకు ప్రసిద్ధి. స్క్రీన్‌ప్లే ప్రాజెక్ట్‌ల కోసం సంప్రదించండి."
                  : "Known for majestic cinematic atmospheres, high-octane suspense, and blockbusters that capture historic imagination on screen. Contact us for collaborative screenwriting projects."}
              </p>
              <div className="border-t border-[#bfa15f]/20 pt-3 flex flex-wrap gap-2 text-[9px] font-mono uppercase text-[#bfa15f] font-bold relative z-10">
                <span className="p-1 px-1.5 rounded bg-black/60 border border-[#bfa15f]/30">🎬 {language === "te" ? "దర్శకుడు" : "Director"}</span>
                <span className="p-1 px-1.5 rounded bg-black/60 border border-[#bfa15f]/30">✍️ {language === "te" ? "రచయిత" : "Screenwriter"}</span>
                <span className="p-1 px-1.5 rounded bg-black/60 border border-[#bfa15f]/30">📖 {language === "te" ? "కథకుడు" : "Storyteller"}</span>
              </div>
            </div>

            {/* FORM: CO-CREATE YOUR BLOCKBUSTER PITCH */}
            <div className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-lg p-5 flex flex-col gap-4 relative shadow-md">
              <div className="flex items-center justify-between border-b border-[#bfa15f]/25 pb-2">
                <h3 className="text-sm font-bold tracking-wider text-[#bfa15f] uppercase flex items-center gap-1.5 font-display">
                  <Sparkles className="w-4 h-4 text-[#bfa15f]" />
                  {language === "te" ? "కథారచన సహాయకం" : "Script Draft Generator"}
                </h3>
                <span className="text-[9px] font-mono text-slate-300 font-bold uppercase">Gemini-Powered</span>
              </div>

              {/* ERROR ALERT */}
              {errorString && (
                <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold animate-pulse">
                  ⚠️ {errorString}
                </div>
              )}

              {/* Genre Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase text-[#bfa15f] tracking-wider font-bold">
                  {language === "te" ? "కథా విభాగం" : "Genre Category"}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Action Thriller",
                    "Mystery Suspense",
                    "Psychological Sci-Fi",
                    "Mythological Crime"
                  ].map((genre) => (
                    <button
                      key={genre}
                      type="button"
                      onClick={() => setSelectedGenre(genre)}
                      className={`text-left text-xs p-2 rounded border font-mono transition-all cursor-pointer ${
                        selectedGenre === genre
                          ? "bg-[#bfa15f]/20 border-[#bfa15f] text-[#bfa15f] font-bold"
                          : "bg-black/55 border-[#bfa15f]/20 text-slate-300 hover:border-[#bfa15f]/50 hover:text-white"
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              {/* Presets Prompters */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase text-[#bfa15f] tracking-wider font-bold">
                  {language === "te" ? "త్వరిత స్టూడియో ప్రీసెట్లు" : "Quick Studio Presets"}
                </label>
                <div className="flex gap-2 justify-between flex-wrap">
                  {presets.map((preset) => (
                    <button
                      key={preset.title}
                      type="button"
                      onClick={() => {
                        setCustomTheme(preset.prompt);
                        setSelectedGenre(preset.genre);
                        setCustomTitle(preset.title);
                      }}
                      className="text-[9px] bg-black/60 text-[#bfa15f] border border-[#bfa15f]/30 hover:border-[#bfa15f]/50 p-1 px-2.5 rounded transition-all font-bold cursor-pointer"
                    >
                      💡 {preset.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title parameter */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase text-[#bfa15f] tracking-wider font-bold">
                  {language === "te" ? "షీర్షిక (ఐచ్ఛికం)" : "Target Title (Optional)"}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder={language === "te" ? "సినిమా శీర్షికను ఇక్కడ టైప్ చేయండి" : "Enter movie title or let Gemini decide"}
                    className="w-full bg-black/60 border border-[#bfa15f]/40 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 font-semibold"
                  />
                </div>
              </div>

              {/* Custom Prompt Text Area */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase text-[#bfa15f] tracking-wider font-bold">
                  {language === "te" ? "కథా నేపథ్యం / సూచనలు" : "Theme / Pitch Directives"}
                </label>
                <textarea
                  value={customTheme}
                  onChange={(e) => setCustomTheme(e.target.value)}
                  placeholder={
                    language === "te" 
                      ? "మీ సినిమా కథాంశం, హీరో లక్షణాలు, లేదా ప్రత్యేక అంశాల గురించి రాయండి..." 
                      : "Describe your movie scenario, hero, stakes, or custom elements..."
                  }
                  rows={4}
                  className="w-full bg-black/60 border border-[#bfa15f]/40 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 font-semibold resize-none leading-relaxed"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="button"
                onClick={generateNewConcept}
                disabled={isGenerating}
                className="w-full primary-btn text-black py-2.5 rounded font-mono font-bold uppercase text-xs hover:scale-105 active:scale-95 duration-200 transition-all shadow-[0_3px_12px_rgba(191,161,95,0.35)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    {language === "te" ? "క్రియేటివ్ స్టోరీబోర్డ్ సృష్టిస్తోంది..." : "GENERATING STORYBOARD..."}
                  </>
                ) : (
                  <>
                    <Clapperboard className="w-4 h-4" />
                    {language === "te" ? "కొత్త కథా రచనా ప్రణాళిక సృష్టించండి" : "Draft New Blockbuster Pitch"}
                  </>
                )}
              </button>

            </div>

            {/* SAVED PORTFOLIO / PITCH CATALOGUE */}
            <div className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-lg p-4 flex flex-col gap-3 shadow-md text-white">
              <h3 className="text-xs font-mono font-bold text-[#bfa15f] uppercase tracking-widest flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-[#bfa15f]" />
                {language === "te" ? `భద్రపరిచిన స్టోరీబోర్డులు (${savedPitches.length})` : `Blockbuster Storyboard Saved (${savedPitches.length})`}
              </h3>
              
              <div className="max-h-48 overflow-y-auto flex flex-col gap-2 no-scrollbar pr-1">
                {savedPitches.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setActiveConcept(p.concept);
                      setActiveScene(1);
                    }}
                    className={`p-2.5 rounded border text-left cursor-pointer transition-all flex items-center justify-between ${
                      activeConcept.title === p.concept.title
                        ? "border-[#bfa15f] bg-black shadow-md font-bold text-[#bfa15f]"
                        : "border-[#bfa15f]/20 bg-black/60 text-slate-300 hover:border-[#bfa15f]/50 hover:bg-zinc-800/40"
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 truncate max-w-[85%]">
                      <span className="text-xs font-semibold truncate uppercase tracking-wider font-display">
                        {p.concept.title}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 truncate font-semibold">
                        {p.genre} — {p.createdAt}
                      </span>
                    </div>
                    
                    {/* Delete entry */}
                    {p.id !== "default-pitch" && (
                      <button
                        onClick={(e) => deleteSavedPitch(p.id, e)}
                        className="text-red-400 hover:text-red-500 border border-[#bfa15f]/20 p-1 hover:bg-red-950/40 rounded font-bold cursor-pointer"
                        title="Delete Pitch"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* SECTION: SCENEWISE STORYBOARD VISUAL cues (DETAILED BLUEPRINT CARD DECK) */}
        <section className="flex flex-col gap-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#bfa15f]/30 pb-2">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#bfa15f]" />
              <div>
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-[#bfa15f]">
                  {language === "te" ? "కథా గమనం & దృశ్యాల అమరిక" : "Active Screenplay & Scene-by-Scene Blueprint"}
                </h3>
                <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest pl-0.5 font-bold">
                  {language === "te" 
                    ? "ఖచ్చితమైన సీన్ పై క్లిక్ చేయడం ద్వారా ప్రోమో రీల్ ఆ సీన్ కి మారుతుంది" 
                    : "Click on any scene blueprint card to jump to it on the interactive player"}
                </p>
              </div>
            </div>
            <div className="text-[10px] text-[#bfa15f] bg-black border border-[#bfa15f]/30 px-2.5 py-1 rounded font-mono font-bold">
              DIRECTOR CUT SPEC: EXACTLY 5 KEY BEATS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {activeConcept.storyboard.map((scene) => (
              <button
                key={scene.sceneNumber}
                type="button"
                onClick={() => handleSceneClick(scene.sceneNumber)}
                className={`text-left p-4.5 rounded-lg border transition-all relative overflow-hidden flex flex-col gap-2.5 cursor-pointer ${
                  activeScene === scene.sceneNumber
                    ? "bg-zinc-950/90 border-[#bfa15f] text-slate-100 shadow-[0_4px_15px_rgba(191,161,95,0.25)] scale-[1.02]"
                    : "bg-zinc-900/75 backdrop-blur-sm border-[#bfa15f]/25 hover:border-[#bfa15f]/40 text-slate-300 hover:text-white shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between border-b border-[#bfa15f]/20 pb-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#bfa15f] tracking-widest font-bold">
                    {language === "te" ? `దృశ్యం 0${scene.sceneNumber}` : `Beat 0${scene.sceneNumber}`}
                  </span>
                  {activeScene === scene.sceneNumber && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="w-2 h-2 rounded-full bg-[#bfa15f]" 
                    />
                  )}
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-semibold font-display tracking-wide uppercase text-[#bfa15f] truncate">
                    {scene.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-normal line-clamp-3 font-semibold">
                    {scene.description}
                  </p>
                </div>

                <div className="space-y-1.5 mt-auto pt-2 border-t border-[#bfa15f]/25 bg-black/80 p-2 rounded">
                  <div className="text-[10px] text-slate-300 leading-normal leading-relaxed font-semibold">
                    <span className="font-mono text-[9px] uppercase text-[#bfa15f] block font-bold">🎬 {language === "te" ? "దృశ్య సంకేతాలు" : "Visual Directions"}</span>
                    <span className="line-clamp-2">{scene.visualCue}</span>
                  </div>
                  <div className="text-[9px] font-mono text-[#bfa15f] flex items-center justify-between font-bold">
                    <span>🔊 {language === "te" ? "ఆడియో/సౌండ్:" : "Audio/FX:"}</span>
                    <span className="text-slate-300 truncate max-w-[65%] font-semibold">{scene.soundEffect}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* SECTION: THE MASTER PROJECTS CATALOG SLATE (6 MOVIES) */}
        <section id="master-projects-catalog-deck" className="flex flex-col gap-6 relative z-10 scroll-mt-24 text-white">
          
          {/* HEADER ELEMENT */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#bfa15f]/30 pb-3">
            <div className="flex items-center gap-2.5">
              <Film className="w-6 h-6 text-[#bfa15f] animate-pulse" />
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold font-display uppercase tracking-wider text-[#bfa15f] font-sans">
                  {language === "te" ? "మాస్టర్ ప్రాజెక్ట్స్ (6 అత్యుత్తమ సినిమాలు)" : "THE MASTER PROJECTS (6 BLOCKBUSTERS)"}
                </h2>
                <p className="text-[10px] text-slate-350 font-mono uppercase tracking-[0.2em] pl-0.5 font-bold">
                  {language === "te" 
                    ? "విజయరంగ అఫీషియల్ సినిమాటిక్ యూనివర్స్ స్లేట్" 
                    : "Vijayaranga Official Cinematic Universe Slate"}
                </p>
              </div>
            </div>

            {/* TOTAL STATS COUNTER GRID (KPI cards) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="bg-zinc-950/80 backdrop-blur-sm border border-[#bfa15f]/40 rounded-md p-2.5 px-4 shadow-sm flex items-center gap-2 shrink-0 hover:border-[#bfa15f]/75 transition-all font-sans font-semibold">
                <span className="text-sm">🎬</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-white font-bold">{language === "te" ? "6 సినిమాలు" : "6 Movies"}</span>
                  <span className="text-[8px] font-mono text-[#bfa15f] uppercase font-bold">{language === "te" ? "మొత్తం స్లేట్" : "Total Slate"}</span>
                </div>
              </div>
              <div className="bg-zinc-950/80 backdrop-blur-sm border border-[#bfa15f]/40 rounded-md p-2.5 px-4 shadow-sm flex items-center gap-2 shrink-0 hover:border-[#bfa15f]/75 transition-all font-sans font-semibold">
                <span className="text-sm text-[#bfa15f]">📜</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-white font-bold">{language === "te" ? "6 సిద్ధంగా ఉన్న స్క్రిప్టులు" : "6 Scripts Ready"}</span>
                  <span className="text-[8px] font-mono text-[#bfa15f] uppercase font-bold">{language === "te" ? "పూర్తి స్క్రిప్ట్‌లు" : "Ready for Production"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC LISTING GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-xl overflow-hidden group hover:border-[#bfa15f]/75 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col h-full"
                >
                  {/* POSTER WRAPPER */}
                  <div className="aspect-[16/9] relative overflow-hidden bg-black border-b border-[#bfa15f]/20">
                    <img
                      src={proj.poster}
                      alt={`${proj.titleEnglish} Poster`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    
                    {/* STATUS BADGE Overlay */}
                    <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest bg-black/95 backdrop-blur-sm border border-[#bfa15f]/40 rounded p-1 px-2.5 shadow-sm font-black uppercase text-[#bfa15f]">
                      {proj.status === "In Development" 
                        ? (language === "te" ? "⚡ అభివృద్ధిలో ఉంది" : "⚡ IN DEVELOPMENT") 
                        : (language === "te" ? "⭐ నిర్మాణానికి సిద్ధం" : "⭐ READY FOR PRODUCTION")}
                    </div>

                    {/* MOVIE NUMBER OVERLAY */}
                    <div className="absolute bottom-3 right-3 text-xs font-mono font-bold tracking-wider bg-black/85 text-white p-1 px-2 rounded-sm border border-[#bfa15f]/30 shadow flex items-center gap-1">
                      <span>🎬</span>
                      <span>
                        {proj.status === "In Development"
                          ? `SLATE 0${projectsData.filter(p => p.status === "In Development").indexOf(proj) + 7}`
                          : `SLATE 0${projectsData.filter(p => !p.status || p.status === "Ready for Production").indexOf(proj) + 1}`}
                      </span>
                    </div>
                  </div>

                  {/* DETAILS BODY */}
                  <div className="p-5 flex flex-col flex-1 gap-3 text-slate-200">
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2 border-b border-[#bfa15f]/25 pb-1.5">
                        <h4 className="text-base sm:text-lg font-telugu font-black tracking-wide text-[#bfa15f] uppercase truncate">
                          {language === "te" ? proj.titleTelugu : proj.titleEnglish}
                        </h4>
                        {language === "te" && (
                          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-display max-w-[50%] truncate pl-2">
                            ({proj.titleEnglish})
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] font-mono tracking-wider font-extrabold text-[#bfa15f] uppercase">
                        🎭 {proj.genre}
                      </p>
                    </div>

                    <p className="text-xs font-telugu leading-relaxed line-clamp-3 text-slate-300 font-semibold italic bg-black/40 border-l-2 border-[#bfa15f]/50 p-2 rounded-sm flex-1">
                      "{proj.corePlot || proj.synopsis}"
                    </p>

                    <div className="border-t border-[#bfa15f]/15 pt-3 mt-auto flex items-center justify-between gap-4">
                      {/* Budget or Details metadata snippet */}
                      <div className="flex flex-col leading-none">
                        <span className="text-[9px] font-mono text-[#bfa15f] uppercase font-bold">
                          {language === "te" ? "అంచనా బడ్జెట్:" : "Est. Budget:"}
                        </span>
                        <span className="text-xs font-bold text-white mt-1">{proj.budget}</span>
                      </div>

                      {/* READ MORE TRIGGERS DETAIL VIEW */}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProject(proj);
                          window.scrollTo({ top: 350, behavior: "smooth" });
                        }}
                        className="primary-btn text-black hover:scale-105 active:scale-95 duration-200 font-bold font-mono text-[10px] uppercase tracking-wider px-3.5 py-2.5 rounded transition-all shadow-[0_2px_10px_rgba(191,161,95,0.25)] flex items-center gap-1 select-none cursor-pointer"
                      >
                        {language === "te" ? "పూర్తి వివరాలు చదవండి" : "Read More"}
                        <ChevronRight className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* SECTION: BRAND DECK: THE LEGENDARY "VIJAYARANGA CINEMATIC SLATE" OVERVIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-2 relative z-10 text-white">
          
          {/* THE PRODUCTION SLATE BRAND CARD */}
          <div className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-md">
            <div className="absolute -left-10 -bottom-10 opacity-[0.05]">
              <span className="text-[160px] font-bold font-mono text-[#bfa15f] select-none pointer-events-none">VR</span>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase text-[#bfa15f] font-bold tracking-[0.3em] bg-[#bfa15f]/10 border border-[#bfa15f]/30 px-3 py-1 rounded inline-block">
                {language === "te" ? "విజయరంగ సినిమాటిక్ స్లేట్" : "VIJAYARANGA"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-[#bfa15f] font-sans">
                {language === "te" ? "\"చరిత్రను సృష్టించే కథలు\"" : "\"Stories That Create History\""}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-semibold">
                {language === "te" 
                  ? "దర్శకుడు, స్క్రీన్ రైటర్ మరియు కథకుడు విజయరంగ ప్రత్యేక దూరదృష్టితో స్థాపించబడింది, మేము సస్పెన్స్ మిస్టరీ థ్రిల్లర్ ప్రాజెక్టులు, ఉన్నత స్థాయి కథా గమనాలు మరియు సువిశాల యాక్షన్ చిత్రాల రూపకల్పనలో ప్రత్యేకత కలిగి ఉన్నాము." 
                  : "Founded with a strong vision by Director, Screenwriter, and Storyteller Vijayaranga, we are specialized in developing suspense mystery thriller projects, high-concept narrative structures, and majestic action blockbusters."}
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded bg-black/60 border border-[#bfa15f]/30 text-center shadow-sm">
                  <h4 className="text-xs font-bold text-[#bfa15f] uppercase tracking-widest">{language === "te" ? "సినిమా 4K" : "Cinema 4K"}</h4>
                  <p className="text-[9px] text-slate-400 font-mono uppercase mt-1 font-bold">{language === "te" ? "పూర్తి పిచ్" : "Render Pitch"}</p>
                </div>
                <div className="p-3 rounded bg-black/60 border border-[#bfa15f]/30 text-center shadow-sm">
                  <h4 className="text-xs font-bold text-[#bfa15f] uppercase tracking-widest">{language === "te" ? "నిజమైన నెటివిటీ" : "Authentic"}</h4>
                  <p className="text-[9px] text-slate-400 font-mono uppercase mt-1 font-bold">{language === "te" ? "తెలుగు మూలాలు" : "Telugu Roots"}</p>
                </div>
                <div className="p-3 rounded bg-black/60 border border-[#bfa15f]/30 text-center shadow-sm">
                  <h4 className="text-xs font-bold text-[#bfa15f] uppercase tracking-widest">{language === "te" ? "ప్రపంచ స్థాయి" : "Global"}</h4>
                  <p className="text-[9px] text-slate-400 font-mono uppercase mt-1 font-bold">{language === "te" ? "బ్లాక్ బస్టర్" : "Blockbuster"}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#bfa15f]/20 pt-5 mt-6 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-[#bfa15f] font-semibold relative z-10">
              <div>📞 +91 9652579968</div>
              <div>✉️ bgrv5211@gmail.com</div>
            </div>
          </div>

          {/* CONTACT & CONSULTATION SUBMISSION CARD */}
          <div id="contact" className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-lg p-6 sm:p-8 flex flex-col gap-4 relative shadow-md">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#bfa15f]/5 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="border-b border-[#bfa15f]/25 pb-3">
              <h3 className="text-sm font-bold tracking-wider text-[#bfa15f] uppercase flex items-center gap-2 font-display">
                <Mail className="w-4 h-4 text-[#bfa15f]" />
                {language === "te" ? "భాగస్వామ్యాలు & చిత్ర నిర్మాణ సంప్రదింపులు" : "Collaborations & Production Consultation"}
              </h3>
              <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1 font-bold">
                {language === "te" 
                  ? "మీ కథాంశాన్ని పంపండి లేదా మీ ప్రాజెక్ట్ కి తగిన స్టోరీబోర్డ్ స్లాట్ ని ఇప్పుడే బుక్ చేసుకోండి" 
                  : "Pitch your own theme or reserve your project storyboard screen space now"}
              </p>
            </div>

            {contactSubmitted ? (
              <motion.div 
                className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-black/60 border border-[#bfa15f]/30 rounded-lg space-y-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="w-12 h-12 text-[#bfa15f] animate-pulse" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#bfa15f]">
                  {language === "te" ? "పిచ్ విజయవంతంగా పంపబడింది!" : "Pitch Transmitted Successfully!"}
                </h4>
                <p className="text-xs text-slate-400 font-mono font-bold">
                  {language === "te" ? "విజయరంగ రివ్యూ సమూహం నవీకరించబడింది." : "VIJAYARANGA review queue updated."}
                </p>
                <div className="text-[10px] text-slate-350 max-w-sm font-semibold">
                  {language === "te"
                    ? "మా బృందం సహకార స్క్రీన్ ప్లే ప్రతిపాదనలను పరిశీలిస్తుంది మరియు మీ ప్రాజెక్ట్ కు తగిన అడ్వాన్స్డ్ ప్రీ-విజువలైజర్ స్టోరీబోర్డ్ స్లేట్‌లను అందిస్తుంది. 24 గంటల్లో మీతో సంప్రదిస్తాము."
                    : "Our team reviews collaborative screenplay proposals and provides advanced pre-visualizer storyboard slates tailored to your project. Expect a dedicated response within 24 hours."}
                </div>
                <button
                  type="button"
                  onClick={() => setContactSubmitted(false)}
                  className="text-[11px] underline text-[#bfa15f] hover:text-white font-bold cursor-pointer"
                >
                  {language === "te" ? "మరొక విచారణ పంపండి" : "Submit another inquiry"}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-3.5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                      {language === "te" ? "విచారణకర్త పేరు" : "Consultant Name"}
                    </label>
                    <div className="relative">
                      <span className="absolute left-2.5 top-2.5 text-[#bfa15f]"><User className="w-3.5 h-3.5" /></span>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder={language === "te" ? "ఉదా., రమేష్ వర్మ" : "e.g., John Miller"}
                        className="w-full bg-black/60 border border-[#bfa15f]/35 rounded px-3 py-1.5 pl-8 text-xs focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 text-white font-semibold"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                      {language === "te" ? "ఈమెయిల్ చిరునామా" : "Contact Email"}
                    </label>
                    <div className="relative">
                      <span className="absolute left-2.5 top-2.5 text-[#bfa15f]"><Mail className="w-3.5 h-3.5" /></span>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="e.g., mail@production.com"
                        className="w-full bg-black/60 border border-[#bfa15f]/35 rounded px-3 py-1.5 pl-8 text-xs focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 text-white font-semibold"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                    {language === "te" ? "మీ ఇండస్ట్రీ రోల్" : "Your Industry Role"}
                  </label>
                  <select
                    value={contactRole}
                    onChange={(e) => setContactRole(e.target.value)}
                    className="w-full bg-black/85 border border-[#bfa15f]/35 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 font-semibold cursor-pointer"
                  >
                    <option value="Producer / Investor" className="bg-zinc-950 text-white">{language === "te" ? "సినిమా నిర్మాత / పెట్టుబడిదారుడు" : "Producer / Movie Studio Investor"}</option>
                    <option value="Independent Screenwriter" className="bg-zinc-950 text-white">{language === "te" ? "స్వతంత్ర స్క్రీన్ రైటర్ / రచయిత" : "Independent Screenwriter / Writer"}</option>
                    <option value="Actor / Talent" className="bg-zinc-950 text-white">{language === "te" ? "నటుడు / నటి" : "Actor / Silver Screen Talent"}</option>
                    <option value="Associate Director" className="bg-zinc-950 text-white">{language === "te" ? "సహాయక దర్శకుడు / క్రియేటివ్ భాగస్వామి" : "Associate Director / Creative Partner"}</option>
                    <option value="Cinematic Admirer" className="bg-zinc-950 text-white">{language === "te" ? "సినిమా ప్రియుడు / ప్రేక్షకుడు" : "Movie Admirer / Audience"}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                    {language === "te" ? "మీ పిచ్ / సంప్రదింపు సందేశం" : "Your Pitch / Consultation Message"}
                  </label>
                  <div className="relative">
                    <span className="absolute left-2.5 top-2.5 text-[#bfa15f]"><MessageSquare className="w-3.5 h-3.5" /></span>
                    <textarea
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder={
                        language === "te" 
                          ? "మీ సినిమా ఆసక్తులు, బడ్జెట్ పరిధి, ప్రొడక్షన్ పిచ్ ల వివరాలను ఇక్కడ వివరించండి..." 
                          : "Detail your cinema interests, collaborative slate pitches, budget scale, or request of consultation with the screenwriter..."
                      }
                      rows={3}
                      className="w-full bg-black/60 border border-[#bfa15f]/35 rounded px-3 py-1.5 pl-8 text-xs focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 text-white font-semibold resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full primary-btn text-black py-2.5 rounded font-mono font-bold uppercase text-xs hover:scale-[1.02] active:scale-95 duration-200 transition-all shadow-[0_3px_12px_rgba(191,161,95,0.35)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 fill-black text-black" strokeWidth={2.5} />
                  {language === "te" ? "బుకింగ్ అభ్యర్థించండి & వివరాలు పంపండి" : "Request Booking & Send Storyboard Brief"}
                </button>
              </form>
            )}

          </div>

        </section>

            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#bfa15f]/30 bg-black/80 backdrop-blur-md px-4 py-8 sm:px-8 mt-12 text-center text-xs text-[#bfa15f] font-mono font-bold relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-2">
            <img 
              src={goldenVrLogo} 
              alt="VR Logo" 
              referrerPolicy="no-referrer"
              className="w-6 h-6 object-cover rounded-full aspect-square border border-[#bfa15f]/40 gold-glow-animated" 
            />
            <p>
              {language === "te"
                ? "© 2026 విజయరంగ సినిమాటిక్ స్లేట్. సర్వ హక్కులూ ప్రత్యేకించబడినవి. స్వచ్ఛమైన తెలుగు గర్వంతో రూపొందించబడింది."
                : "© 2026 VIJAYARANGA. All Rights Reserved. Co-Developed & Authored with Telugu Pride."}
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#teaser-player-canvas" className="hover:text-white transition-colors">
              {language === "te" ? "↑ ప్లేయర్ పైకి వెళ్ళండి" : "↑ Player Back to Top"}
            </a>
            <span>•</span>
            <span className="text-[#bfa15f]">
              {language === "te" ? "\"చరిత్రను నిర్మించే కథలు\"" : "\"Stories That Create History\""}
            </span>
          </div>
        </div>
      </footer>

      {/* PWA INSTALLATION ROADMAP OVERLAY */}
      <AnimatePresence>
        {showInstallGuide && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 text-[#bfa15f]"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-zinc-950 border-2 border-[#bfa15f]/60 max-w-lg w-full rounded-2xl p-6 relative overflow-hidden shadow-2xl flex flex-col gap-4 font-semibold text-slate-100 animate-fade-in"
            >
              {/* Golden Background Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#bfa15f]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setShowInstallGuide(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 p-1.5 rounded-full text-xs font-mono"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-[#bfa15f]/30 pb-3">
                <div className="w-10 h-10 rounded-full bg-[#bfa15f]/10 border border-[#bfa15f]/40 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-[#bfa15f]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#bfa15f] uppercase tracking-wider font-display">
                    {language === "te" ? "మొబైల్ యాప్‌లా మార్చండి" : "Install Mobile Application"}
                  </h3>
                  <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest pl-0.5 font-bold">
                    {language === "te" ? "విజయరంగ సినిమాటిక్ స్టూడియో యాప్" : "VIJAYARANGA CINEMA PWA PROCESS"}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 leading-relaxed font-semibold">
                {language === "te" 
                  ? "ఈ సినిమాటిక్ స్లేట్ వెబ్‌సైట్‌ను మీ మొబైల్‌లో ఒక నిఖార్సైన అప్లికేషన్ లాగా మార్చుకోవచ్చు. దీని కోసం ఎలాంటి యాప్ స్టోర్ల అవసరం లేకుండా నేరుగా ఫోన్ హోమ్ స్క్రీన్‌కు చేర్చవచ్చు."
                  : "Convert this advanced film slate website directly into an authentic, standalone mobile application icon on your screen. No installation from app stores required!"}
              </p>

              {/* Multi-platform Guides */}
              <div className="space-y-4">
                {/* Section A: iOS (Safari) */}
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex flex-col gap-2 shadow-inner">
                  <span className="text-[10px] font-mono text-[#bfa15f] uppercase font-black tracking-wider flex items-center gap-1.5 border-b border-zinc-800 pb-1.5">
                    🍏 APPLE iOS (SAFARI BROWSER):
                  </span>
                  <ol className="text-xs text-zinc-300 list-decimal pl-4 space-y-1.5 pr-1 font-semibold">
                    <li>
                      {language === "te" 
                        ? (<span>సఫారి బ్రౌజర్ క్రింది భాగంలో ఉన్న <strong className="text-white bg-zinc-850 px-1.5 py-0.5 rounded inline-flex items-center gap-1 font-mono font-bold uppercase border border-zinc-700">షేర్ <Share2 className="w-3 inline text-[#bfa15f]" /></strong> బటన్ పై నొక్కండి.</span>)
                        : (<span>Tap Safari Menu's <strong className="text-white bg-zinc-850 px-1.5 py-0.5 rounded inline-flex items-center gap-1 font-bold border border-zinc-700">Share <Share2 className="w-3 inline text-[#bfa15f]" /></strong> icon at the screen bottom.</span>)
                      }
                    </li>
                    <li>
                      {language === "te" 
                        ? (<span>జాబితాను కాస్త క్రిందికి స్క్రోల్ చేసి, <strong className="text-[#bfa15f] bg-black/40 px-1.5 py-0.5 rounded border border-[#bfa15f]/20">\'ఆడ్ టు హోమ్ స్క్రీన్\' (Add to Home Screen) <AppWindow className="w-3 inline text-[#bfa15f]" /></strong> ఆప్షన్‌ను ఎంచుకోండి.</span>)
                        : (<span>Scroll down the action list and select <strong className="text-[#bfa15f] bg-black/40 px-1.5 py-0.5 rounded border border-[#bfa15f]/20">\'Add to Home Screen\' <AppWindow className="w-3 inline text-[#bfa15f]" /></strong>.</span>)
                      }
                    </li>
                    <li>
                      {language === "te" 
                        ? "కుడిరైట్ కార్నర్ లో పైన ఉన్న 'ఆడ్' (Add) బటన్ నొక్కండి. యాప్ విజయవంతంగా మీ ఫోన్ హోమ్ స్క్రీన్ పై సేవ్ అవుతుంది!"
                        : "Tap 'Add' in the top-right. The cinematic slate badge is now configured directly onto your app dashboard!"}
                    </li>
                  </ol>
                </div>

                {/* Section B: Android (Chrome / Firefox / Edge) */}
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex flex-col gap-2 shadow-inner">
                  <span className="text-[10px] font-mono text-[#bfa15f] uppercase font-black tracking-wider flex items-center gap-1.5 border-b border-zinc-800 pb-1.5">
                    🤖 ANDROID (CHROME & OTHER BROWSERS):
                  </span>
                  <ol className="text-xs text-zinc-300 list-decimal pl-4 space-y-1.5 pr-1 font-semibold">
                    <li>
                      {language === "te" 
                        ? (<span>బ్రౌజర్ పైన/క్రింద కనిపించే <strong className="text-white bg-zinc-850 px-1.5 py-0.5 rounded font-mono font-bold border border-zinc-700">మూడు చుక్కలు ⋮</strong> ఆప్షన్ బటన్ పై క్లిక్ చేయండి.</span>)
                        : (<span>Tap the browser's menu option <strong className="text-white bg-zinc-850 px-1.5 py-0.5 rounded font-mono font-bold border border-zinc-700">⋮ (Three Dots)</strong> at the top right.</span>)
                      }
                    </li>
                    <li>
                      {language === "te" 
                        ? (<span>అందులో ఉన్న <strong className="text-[#bfa15f] bg-black/40 px-1.5 py-0.5 rounded border border-[#bfa15f]/20">\'ఇన్‌స్టాల్ యాప్\' (Install App)</strong> లేదా <strong className="text-[#bfa15f] bg-black/40 px-1.5 py-0.5 rounded border border-[#bfa15f]/20">\'హోమ్ స్క్రీన్‌కు చేర్చు\'</strong> పై క్లిక్ చేయండి.</span>)
                        : (<span>Click on <strong className="text-[#bfa15f] bg-black/40 px-1.5 py-0.5 rounded border border-[#bfa15f]/20">\'Install App\'</strong> or <strong className="text-[#bfa15f] bg-black/40 px-1.5 py-0.5 rounded border border-[#bfa15f]/20">\'Add to Home Screen\'</strong>.</span>)
                      }
                    </li>
                    <li>
                      {language === "te" 
                        ? "నిర్ధారణ అభ్యర్థన రాగానే 'ఇన్‌స్టాల్' నొక్కండి. నిమిషంలో మొబైల్ హోమ్ స్క్రీన్‌పై స్వతంత్రంగా అప్లికేషన్ ప్రత్యక్షమౌతుంది!"
                        : "Confirm the dialogue. The application launcher will stand up on your Android phone dashboard instantly!"}
                    </li>
                  </ol>
                </div>
              </div>

              {/* Status footer button */}
              <div className="flex gap-2.5 pt-2">
                <button 
                  onClick={() => setShowInstallGuide(false)}
                  className="flex-1 bg-gradient-to-r from-[#bfa15f] to-[#d6bc85] hover:from-[#bfa15f]/85 hover:to-[#d6bc85]/85 text-black hover:scale-[1.01] active:scale-[0.99] transition-all text-xs py-2.5 rounded-xl text-center uppercase tracking-widest font-mono font-black border-none cursor-pointer"
                >
                  {language === "te" ? "సరే, ధన్యవాదాలు" : "Done, Thank You"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
