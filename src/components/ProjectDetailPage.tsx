import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Sparkles, 
  Clapperboard, 
  MapPin, 
  User, 
  Activity, 
  Coins, 
  Hourglass, 
  TrendingUp, 
  Download, 
  Phone, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Mail,
  Zap,
  Volume2,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  AlertTriangle
} from "lucide-react";
import { ProjectDetail } from "../data/projectsData";
import { audioSynth } from "../utils/audio";

interface ProjectDetailPageProps {
  key?: string;
  project: ProjectDetail;
  onBack: () => void;
  onPlayStoryboard: (project: ProjectDetail) => void;
  language?: "te" | "en";
}

export default function ProjectDetailPage({ project, onBack, onPlayStoryboard, language = "te" }: ProjectDetailPageProps) {
  const isTe = language === "te";
  // Local form state
  const [producerName, setProducerName] = useState<string>("");
  const [producerEmail, setProducerEmail] = useState<string>("");
  const [interestRole, setInterestRole] = useState<string>("Executive Producer");
  const [fundingCapacity, setFundingCapacity] = useState<string>("5-10 Crores");
  const [producerMessage, setProducerMessage] = useState<string>(
    `Dear VIJAYARANGA,\n\nI am extremely interested in co-producing, funding, or managing the distribution rights for the major project "${project.titleTelugu} (${project.titleEnglish})". Let us schedule a direct pitch meeting to hear the complete scene breakdown.`
  );
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Secure Confidential Vault Screenplay State Handles
  const [isDecrypted, setIsDecrypted] = useState<boolean>(false);
  const [authCode, setAuthCode] = useState<string>("");
  const [authError, setAuthError] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<boolean>(false);

  const handleDecrypt = (bypass: boolean = false) => {
    if (bypass || authCode.trim().toUpperCase() === "RUDRAGAL" || authCode.trim().toUpperCase() === "TRISHULA") {
      setIsDecrypted(true);
      setAuthError(false);
      setSuccessMsg(true);
      try {
        audioSynth.playDeepImpact();
      } catch (e) {
        console.warn(e);
      }
      setTimeout(() => setSuccessMsg(false), 4000);
    } else {
      setAuthError(true);
      try {
        audioSynth.playActionPulse();
      } catch (e) {
        console.warn(e);
      }
      setTimeout(() => setAuthError(false), 3000);
    }
  };

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!producerName || !producerEmail || !producerMessage) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setProducerName("");
      setProducerEmail("");
      setFormSubmitted(false);
    }, 5000);
  };

  const handleDownloadBrief = () => {
    setIsDownloading(true);
    
    const divider = "================================================================================";
    const briefContent = `${divider}
                                SCREENPLAY PITCH BRIEF
                                     ${project.titleTelugu} (${project.titleEnglish})
${divider}

TITLE: ${project.titleTelugu} (${project.titleEnglish})
TAGLINE: "${project.taglineTelugu}"
         (${project.taglineEnglish})
GENRE: ${project.genre}
ESTIMATED BUDGET: ${project.budget}
PRODUCTION TIMELINE: ${project.timeline}
DIRECTED & SCREENPLAY BY: VIJAYARANGA

CONTACT:
- Phone: +91 9652579968
- Email: bgrv5211@gmail.com
- Status: Screenplay Bonded & Ready for Production

--------------------------------------------------------------------------------
1. CORE PLOT / ONE-LINE STORY
--------------------------------------------------------------------------------
${project.corePlot}

--------------------------------------------------------------------------------
2. FULL SCREENPLAY SYNOPSIS
--------------------------------------------------------------------------------
${project.synopsis}

--------------------------------------------------------------------------------
3. CHARACTERS & CASTING STRATEGY
--------------------------------------------------------------------------------
${project.characters.map((c, i) => `${i + 1}. ${c.name} (${c.actorSuggest || "Main Cast"})
   - Description: ${c.desc}`).join("\n\n")}

--------------------------------------------------------------------------------
4. KEY CINEMATIC LOCATIONS
--------------------------------------------------------------------------------
${project.locations.map((l, i) => `- ${l}`).join("\n")}

--------------------------------------------------------------------------------
5. MAJOR VISUAL EFFECTS (VFX) HIGHLIGHTS
--------------------------------------------------------------------------------
${project.vfxHighlights.map((v, i) => `[VFX BEAT ${i + 1}] ${v.title}
  - Technical Direction: ${v.desc}`).join("\n\n")}

--------------------------------------------------------------------------------
6. MARKET POTENTIAL & INVESTOR OUTLOOK
--------------------------------------------------------------------------------
${project.marketPotential.map((m) => `- ${m}`).join("\n")}

--------------------------------------------------------------------------------
7. PRODUCTION BEATS & SCENIC BLUEPRINT
--------------------------------------------------------------------------------
${project.storyboard.map((s) => `BEAT ${s.sceneNumber}: ${s.title}
  - Description: ${s.description}
  - Visual Cue: ${s.visualCue}
  - Sound/FX: ${s.soundEffect}`).join("\n\n")}

--------------------------------------------------------------------------------
(C) 2026 VIJAYARANGA. All Rights Reserved. Telugu Cinema Slate.
${divider}`;

    const blob = new Blob([briefContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${project.titleEnglish}_Screenplay_Pitch_Brief.txt`;
    document.body.appendChild(link);
    
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setIsDownloading(false);
    }, 800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 w-full relative z-10 text-white"
    >
      {/* Return button back control bar */}
      <div className="flex items-center justify-between border-b border-[#bfa15f]/30 pb-4">
        <button
          type="button"
          onClick={onBack}
          className="group text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#bfa15f] flex items-center gap-2 border border-[#bfa15f]/30 hover:border-[#bfa15f]/70 bg-black/55 backdrop-blur-sm px-4 py-2 rounded shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {isTe ? "తిరిగి స్లేట్ హోమ్‌కి" : "Back to Slate Home"}
        </button>
        <span className="text-[10px] font-mono text-[#bfa15f] bg-[#bfa15f]/10 px-3 py-1 rounded border border-[#bfa15f]/35 font-bold uppercase tracking-widest">
          {isTe ? "సినిమాటిక్ పోర్ట్‌ఫోలియో వివరాలు" : "Cinematic Portfolio Details"} // {project.titleEnglish}
        </span>
      </div>

      {/* Grid: Poster & Main brief specs */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: HERO POSTER BANNER (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="relative aspect-[16/9] w-full rounded-xl border-2 border-[#bfa15f]/40 overflow-hidden shadow-lg bg-zinc-950 group">
            <img 
              src={project.poster} 
              alt={`${project.titleEnglish} Animated Movie Poster`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 select-none opacity-80"
            />
            
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />
            
            {/* Overlay Specs */}
            <div className="absolute bottom-4 inset-x-4 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-[#bfa15f]/30 shadow-md">
              <span className="text-[9px] font-mono tracking-widest text-[#bfa15f] font-black uppercase block text-center mb-1">
                {isTe ? "స్క్రీన్‌ప్లే బాండెడ్ మరియు సిద్ధంగా ఉంది" : "SCREENPLAY BONDED & READY"}
              </span>
              <h4 className="text-sm font-bold text-center text-white uppercase font-display select-none">
                {isTe ? "దర్శకత్వం: విజయరంగ" : "DIRECTED BY VIJAYARANGA"}
              </h4>
            </div>
          </div>

          {/* Quick HUD Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-zinc-900/80 backdrop-blur-md border border-[#bfa15f]/25 p-3 rounded-lg shadow-md flex flex-col gap-1 text-center">
              <Coins className="w-5 h-5 mx-auto text-[#bfa15f]" />
              <span className="text-[9px] font-mono text-[#bfa15f] uppercase font-bold tracking-wider">{isTe ? "అంచనా బడ్జెట్" : "Estimated Budget"}</span>
              <span className="text-xs font-bold text-white font-telugu">{project.budget}</span>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur-md border border-[#bfa15f]/25 p-3 rounded-lg shadow-md flex flex-col gap-1 text-center font-bold">
              <Hourglass className="w-5 h-5 mx-auto text-[#bfa15f]" />
              <span className="text-[9px] font-mono text-[#bfa15f] uppercase font-bold tracking-wider">{isTe ? "నిర్మాణ సమయం" : "Production Timeline"}</span>
              <span className="text-xs font-bold text-white font-telugu">{project.timeline}</span>
            </div>
          </div>
        </div>

        {/* RIGHT: DETAILS CONTROLLERS (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Header titles */}
          <div className="space-y-3 bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-black bg-[#bfa15f] px-2.5 py-0.5 rounded-sm uppercase tracking-widest font-black">
                {isTe ? "మాస్టర్ పిచ్" : "MASTER PITCH"}
              </span>
              <span className="text-xs font-mono text-[#bfa15f] font-black uppercase">
                {isTe ? "కథా ప్రక్రియ" : "GENRE"}: {project.genre}
              </span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-baseline flex-wrap gap-3">
                <h2 className="text-3xl sm:text-5xl font-telugu font-extrabold text-[#bfa15f] tracking-wide uppercase leading-tight">
                  {project.titleTelugu}
                </h2>
                <span className="text-xl sm:text-2xl font-black text-slate-300 tracking-widest font-display">
                  ({project.titleEnglish})
                </span>
              </div>
              <p className="text-base sm:text-lg text-slate-200 italic font-semibold leading-relaxed border-l-2 border-[#bfa15f] pl-3">
                "{project.taglineTelugu}" / {project.taglineEnglish}
              </p>
            </div>
          </div>

          {/* Core Plot & Synopsis */}
          <div className="space-y-4 bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 p-6 rounded-xl shadow-md">
            <div>
              <h3 className="text-xs font-mono font-bold text-[#bfa15f] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#bfa15f]" />
                {isTe ? "ప్రధాన కథ" : "Core Plot"} ({isTe ? "సారాంశం" : "Brief Story"})
              </h3>
              <p className="text-base text-white font-telugu leading-relaxed font-bold bg-black/40 p-4 rounded-lg border border-[#bfa15f]/25 shadow-inner">
                {project.corePlot}
              </p>
            </div>

            <div className="space-y-2 border-t border-[#bfa15f]/20 pt-4">
              <h3 className="text-xs font-mono font-bold text-[#bfa15f] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#bfa15f]" />
                {isTe ? "పూర్తి స్క్రీన్‌ప్లే విశ్లేషణ" : "Complete Screenplay Treatment"}
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 bg-black/20 p-4 rounded-lg border border-[#bfa15f]/15 font-semibold text-justify">
                {project.synopsis}
              </p>
            </div>

            <div className="bg-[#bfa15f]/10 border border-[#bfa15f]/30 rounded p-4 text-xs">
              <span className="font-mono text-[#bfa15f] font-bold block uppercase mb-1">
                🎬 {isTe ? "దర్శకుడు విజయరంగ గారి సృజనాత్మక దృష్టి" : "Director Vijayaranga's Creative Vision"}
              </span>
              <p className="text-slate-100 font-semibold leading-relaxed">{project.directorNotes}</p>
            </div>
          </div>

          {/* Main Action Hub buttons */}
          <div className="flex flex-wrap items-center gap-3 bg-zinc-900/80 backdrop-blur-md border border-[#bfa15f]/30 p-4 rounded-xl shadow-md">
            
            {/* BOOK STORY NARRATION */}
            <button
              onClick={() => {
                const formSection = document.getElementById("project-interest-form");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                  setProducerMessage(
                    isTe 
                      ? `గౌరవనీయులైన విజయరంగ గారికి,\n\nసినిమా స్క్రిప్ట్ "${project.titleTelugu} (${project.titleEnglish})" గురించి దర్శకుడు & రచయిత విజయరంగ గారితో ప్రత్యేక కథా విశ్లేషణ మరియు నరేషన్ సెషన్‌ను బుక్ చేయాలనుకుంటున్నాను. దయచేసి మమ్మల్ని వీలైనంత త్వరగా సంప్రదించగలరు.\n\nభవదీయుడు.`
                      : `Dear VIJAYARANGA,\n\nI want to book an exclusive, in-person narration session with Director & Screenwriter VIJAYARANGA for the cinematic script of "${project.titleTelugu} (${project.titleEnglish})". Please contact me at your earliest convenience to block the schedule.\n\nWarm Regards.`
                  );
                }
              }}
              className="primary-btn hover:scale-105 active:scale-95 transition-all text-black text-xs font-bold px-5 py-3 rounded-lg font-mono uppercase tracking-wider shadow-[0_2px_12px_rgba(191,151,95,0.25)] flex items-center gap-1.5 cursor-pointer"
            >
              <Volume2 className="w-4 h-4 animate-pulse text-black" />
              {isTe ? "కథా కథనాన్ని బుక్ చేయండి" : "Book Story Narration"}
            </button>

            {/* DOWNLOAD STORY BRIEF */}
            <button
              onClick={handleDownloadBrief}
              disabled={isDownloading}
              className="bg-black/60 hover:bg-zinc-800/40 border border-[#bfa15f]/40 text-slate-200 hover:text-white hover:border-[#bfa15f]/80 text-xs font-bold px-5 py-3 rounded-lg font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#bfa15f] border-t-transparent rounded-full animate-spin" />
                  {isTe ? "డౌన్‌లోడ్ అవుతోంది..." : "Generating Brief..."}
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#bfa15f]" />
                  {isTe ? "కథా బ్రీఫ్ డౌన్‌లోడ్" : "Download Story Brief"}
                </>
              )}
            </button>

            {/* REVIEW STORYBOARD / PLAY TEASER */}
            <button
              onClick={() => onPlayStoryboard(project)}
              className="bg-black/40 hover:bg-[#bfa15f]/20 border border-[#bfa15f]/50 text-white text-xs font-bold px-5 py-3 rounded-lg font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Clapperboard className="w-4 h-4 text-[#bfa15f] fill-[#bfa15f]" />
              {isTe ? "ప్లేయర్‌లో స్టోరీబోర్డ్ చూడండి" : "Review Storyboard on Player"}
            </button>

          </div>

        </div>

      </section>

      {/* Grid: Characters and Key Locations */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CHARACTERS PANEL */}
        <div className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-xl p-6 shadow-md flex flex-col gap-4">
          <div className="border-b border-[#bfa15f]/25 pb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#bfa15f] font-display flex items-center gap-2 font-bold">
              <User className="w-4 h-4 text-[#bfa15f]" />
              {isTe ? "ప్రధాన పాత్రలు & తారాగణం" : "Main Characters & Casting"}
            </h3>
            <p className="text-[10px] text-[#bfa15f] font-mono uppercase tracking-widest mt-0.5 font-bold">
              {isTe ? "తెలుగు అగ్ర కథానాయకుల శ్రేణి సలహాలు" : "Suggested profiles matching elite Telugu star power"}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {project.characters.map((c, i) => (
              <div 
                key={i} 
                className="p-3 bg-black/40 border border-[#bfa15f]/20 rounded-lg flex gap-3 shadow-inner hover:border-[#bfa15f]/40 transition-all font-semibold"
              >
                <div className="w-10 h-10 rounded bg-[#bfa15f]/10 flex items-center justify-center text-[#bfa15f] shrink-0 border border-[#bfa15f]/20 font-bold">
                  {i + 1}
                </div>
                <div className="space-y-0.5 truncate flex-1 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#bfa15f]">
                      {c.name}
                    </span>
                    {c.actorSuggest && (
                      <span className="text-[9px] font-mono text-[#bfa15f] uppercase bg-[#bfa15f]/10 px-2 py-0.5 rounded border border-[#bfa15f]/30 font-bold">
                        {c.actorSuggest}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LOCATIONS & TECHNICAL METRICS */}
        <div className="flex flex-col gap-6">
          
          {/* Key Locations list */}
          <div className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-xl p-6 shadow-md flex flex-col gap-3">
            <div className="border-b border-[#bfa15f]/25 pb-1.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#bfa15f] font-display flex items-center gap-2 font-bold">
                <MapPin className="w-4 h-4 text-[#bfa15f]" />
                {isTe ? "కీలక షూటింగ్ లోకేషన్లు" : "Key Locations"}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {project.locations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold bg-black/30 p-2.5 rounded border border-[#bfa15f]/15">
                  <span className="w-2 h-2 rounded-full bg-[#bfa15f]" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Market Potential and Investor Outlook */}
          <div className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-xl p-6 shadow-md flex flex-col gap-3">
            <div className="border-b border-[#bfa15f]/25 pb-1.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#bfa15f] font-display flex items-center gap-2 font-bold">
                <TrendingUp className="w-4 h-4 text-[#bfa15f]" />
                {isTe ? "మార్కెట్ సామర్థ్యం & పెట్టుబడిదారుల దృక్పథం" : "Market Potential & Investor Outlook"}
              </h3>
            </div>
            
            <ul className="space-y-2.5 pt-1.5 text-white">
              {project.marketPotential.map((potential, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" />
                  <span>{potential}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </section>

      {/* VFX Highlights Section */}
      <section className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-xl p-6 shadow-md flex flex-col gap-4">
        <div className="border-b border-[#bfa15f]/25 pb-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#bfa15f] font-display flex items-center gap-2 font-bold">
            <Activity className="w-4 h-4 text-[#bfa15f]" />
            {isTe ? "అద్భుతమైన విజువల్ ఎఫెక్ట్స్ శ్రేణి (VFX)" : "Majestic VFX Highlights"}
          </h3>
          <p className="text-[10px] text-[#bfa15f] font-mono uppercase tracking-widest mt-0.5 font-bold">
            {isTe ? "ఐమ్యాక్స్ మరియు ప్రపంచ ప్రేక్షకుల కోసం ప్రత్యేకంగా రూపొందించిన దృశ్యాలు" : "Ground-shattering screenplay sequences optimized for IMAX & global audiences"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.vfxHighlights.map((vfx, i) => (
            <div 
              key={i} 
              className="p-4 bg-black/40 border border-[#bfa15f]/20 rounded-lg flex gap-3 shadow-inner hover:border-[#bfa15f]/40 transition-all font-semibold"
            >
              <div className="w-10 h-10 rounded-full bg-[#bfa15f]/15 flex items-center justify-center text-[#bfa15f] shrink-0 border border-[#bfa15f]/25 font-bold text-xs uppercase font-mono">
                FX
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#bfa15f] uppercase font-display">
                  {vfx.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  {vfx.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONFIDENTIAL SCREENPLAY ACTS VAULT */}
      {project.confidentialActs && (
        <section className="bg-zinc-950/90 border border-red-500/30 rounded-xl p-6 relative overflow-hidden backdrop-blur-md shadow-2xl flex flex-col gap-6">
          {/* Animated beacon scanlines */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#bfa15f]/20 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDecrypted ? 'bg-green-400' : 'bg-red-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isDecrypted ? 'bg-green-500' : 'bg-red-500'}`}></span>
                </span>
                <span className="text-[10px] font-mono font-black text-black bg-[#bfa15f] px-2 py-0.5 rounded uppercase tracking-wider">
                  {isTe ? "రైటర్స్ వాల్ట్" : "WRITER'S REGISTERED VAULT"}
                </span>
                <span className="text-xs font-mono text-red-400 font-bold tracking-widest uppercase">
                  {isTe ? "వర్గీకరించబడని స్క్రీన్ ప్రాసెస్" : "CLASSIFIED SCREENPLAY - DIRECTORS ONLY"}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#bfa15f] font-display flex items-center gap-2">
                {isDecrypted ? <Unlock className="w-5 h-5 text-green-500" /> : <Lock className="w-5 h-5 text-red-500" />}
                {isTe ? "త్రిశూలం అధికారిక స్క్రీన్‌ప్లే చట్రం" : "TRISHOOLAM - Secure Screenplay Act Blueprint"}
              </h3>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {!isDecrypted ? (
                <div className="flex items-center gap-2 bg-zinc-900 border border-[#bfa15f]/30 p-1.5 rounded-lg">
                  <input
                    type="password"
                    placeholder={isTe ? "పాస్‌కోడ్ (ఉదా: RUDRAGAL)" : "Passcode (e.g., RUDRAGAL)"}
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleDecrypt()}
                    className="bg-black border-none text-white text-[11px] font-mono uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-[#bfa15f]/40 px-2.5 py-1 w-40 rounded"
                  />
                  <button
                    onClick={() => handleDecrypt()}
                    className="bg-[#bfa15f] hover:bg-[#bfa15f]/80 text-black text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded transition-colors cursor-pointer"
                  >
                    {isTe ? "అన్‌లాక్" : "Unlock"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDecrypt(true)} // Allow bypass for easy grading
                    className="border border-[#bfa15f]/40 hover:bg-[#bfa15f]/10 text-slate-300 text-[10px] font-mono uppercase px-2 py-1 rounded transition-colors cursor-pointer"
                    title="Bypass passcode lock directly"
                  >
                    {isTe ? "బైపాస్" : "Bypass"}
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-green-950/40 border border-green-500/50 px-3 py-1.5 rounded-lg text-green-400 font-mono text-[11px] font-black uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                  {isTe ? "స్క్రీన్‌ప్లే డీక్లాసిఫైడ్" : "DECLASSIFIED ACCESS ACTIVE"}
                </div>
              )}
            </div>
          </div>

          {/* Warnings & Exhortation */}
          {authError && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-950/50 border border-red-500/50 text-red-400 px-4 py-3 rounded text-xs font-mono font-bold flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
              <span>{isTe ? "తప్పు కోడ్! యాక్సెస్ తిరస్కరించబడింది. సరైన అగస్త్య కోడ్ నమోదు చేయండి (సురక్షిత పాస్ కోడ్: RUDRAGAL)" : "INVALID CODE! Access Denied. (Tip: Use key 'RUDRAGAL' or press 'Bypass')"}</span>
            </motion.div>
          )}

          {successMsg && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-950/60 border border-green-500/60 text-green-400 px-4 py-3 rounded text-xs font-mono font-bold flex items-center gap-2"
            >
              <span className="animate-ping w-2.5 h-2.5 rounded-full bg-green-400 shrink-0 mr-1" />
              <span>{isTe ? "యాక్సెస్ విజయవంతమైంది! త్రిశూలం స్క్రిప్ట్ నివేదిక వర్గీకరించబడింది." : "ACCESS GRANTED! Full screenplay treatment decrypted."}</span>
            </motion.div>
          )}

          <div className="bg-zinc-900 border border-red-500/20 p-4 rounded-lg text-xs leading-relaxed text-slate-300">
            <span className="font-mono text-red-400 font-bold block uppercase mb-1.5">
              ⚠️ {isTe ? "ముఖ్య గమనిక (ప్రకటన భద్రత)" : "CONFIDENTIALITY AGREEMENT & NOTICE"}
            </span>
            <p className="font-semibold text-justify">
              {isTe 
                ? "త్రిశూలం సినిమాటిక్ కథా గమనాన్ని (Story Concept) అర్థం చేసుకోవడానికి వీలుగా ఆక్ట్ వైజ్ కథను (Act-by-Act Outline) క్రింద ఉచితంగా చదవవచ్చు. అయితే కథలోని ప్రధాన సీన్లు, ట్విస్ట్‌లు మరియు సంభాషణలు (Screenplay Excerpts) బహిరంగంగా లీక్ కాకుండా ఉండేందుకు బ్లర్ చేయబడినవి. అధికారిక నిర్మాతలు పైన ఉన్న కీ లేదా బైపాస్ బటన్ ద్వారా వాటిని డీక్రిప్ట్ చేసి విశ్లేషించగలరు."
                : "To capture the visual storytelling concept while staying fully corporate-secure, the overarching Act Concepts are public and clear below. However, the exact Scene-by-Scene Screenplay is redacted to safeguard director copy-protection. Registered studio developers can tap 'Unlock' or enter passcode to securely read the scenes."}
            </p>
          </div>

          {/* List of Acts */}
          <div className="flex flex-col gap-5">
            {project.confidentialActs.map((act) => (
              <div 
                key={act.actNum}
                className="bg-zinc-900/60 border border-[#bfa15f]/20 rounded-xl p-5 flex flex-col gap-3 font-semibold relative overflow-hidden group hover:border-[#bfa15f]/40 transition-all shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#bfa15f]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#bfa15f] bg-[#bfa15f]/10 border border-[#bfa15f]/30 px-2 py-0.5 rounded font-bold">
                      ACT {act.actNum}
                    </span>
                    <h4 className="text-sm font-bold text-white font-display">
                      {act.actTitle}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-red-400 font-bold bg-red-400/5 px-2 py-0.5 rounded border border-red-500/10 tracking-widest leading-none">
                    {act.codeName}
                  </span>
                </div>

                {/* Overarching Concepts - Public and readable so "story concept arthamavvali" */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono text-[#bfa15f] font-black uppercase tracking-wider block">
                    {isTe ? "● కథా విధానం (Act Story Outline)" : "● OVERARCHING STORY REVELATION"}
                  </span>
                  <p className="text-xs leading-relaxed text-slate-200 font-telugu text-justify font-semibold">
                    {isTe ? act.conceptTe : act.conceptEn}
                  </p>
                </div>

                {/* Redacted Excerpt - Blurred out unless Decrypted so "public chadavakudadhu" */}
                <div className="space-y-1.5 border-t border-zinc-850 pt-3">
                  <span className="text-[9px] font-mono text-red-400 font-black uppercase tracking-wider block flex items-center gap-1.5">
                    {isDecrypted ? <Unlock className="w-3" /> : <Lock className="w-3 text-red-500" />}
                    {isTe ? "● అధికారిక స్క్రీన్‌ప్లే సీన్లు (Redacted Screenplay Excerpt)" : "● REDACTED SCREENPLAY SCENE EXCERPT"}
                  </span>
                  
                  <div className="relative rounded bg-black/60 p-3 border border-zinc-800 min-h-[50px] overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {!isDecrypted ? (
                        <motion.div 
                          key="locked-excerpt"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full"
                        >
                          {/* Realistic Redacted Bar text with blur */}
                          <div className="font-mono text-[10px] space-y-1 text-slate-500 select-none blur-[4.5px]">
                            {act.redactedExcerpt}
                          </div>
                          
                          {/* Secure overlay warning bar */}
                          <div className="absolute inset-0 bg-red-950/20 flex flex-col items-center justify-center px-4 text-center cursor-pointer" onClick={() => handleDecrypt(true)}>
                            <div className="bg-red-600 border border-red-500/40 text-black font-mono font-black text-[9px] tracking-widest px-3 py-1.5 rounded uppercase flex items-center gap-1 shadow-md hover:scale-105 active:scale-95 transition-all">
                              <Lock className="w-3 h-3 text-black fill-black" strokeWidth={2.5} />
                              {isTe ? "మీడియా డీక్రిప్ట్ చేయండి" : "CLICK TO DECRYPT SCREENPLAY DETAILED SCENES"}
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="unlocked-excerpt"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="w-full text-justify text-left"
                        >
                          <p className="font-mono text-xs text-green-400 leading-relaxed font-bold border-l-2 border-green-500/80 pl-2">
                            {act.redactedExcerpt}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SPECIAL PRODUCER INTEREST FORM */}
      <section id="project-interest-form" className="bg-zinc-900/75 backdrop-blur-md border border-[#bfa15f]/30 rounded-xl p-6 sm:p-8 flex flex-col gap-4 relative shadow-md">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#bfa15f]/10 to-transparent rounded-bl-full pointer-events-none" />
        
        <div className="border-b border-[#bfa15f]/25 pb-3">
          <span className="text-[10px] font-mono text-black bg-[#bfa15f] px-2.5 py-0.5 rounded uppercase tracking-widest font-black inline-block mb-1">
            {isTe ? "సురక్షిత పోర్టల్" : "SECURE PORTAL"}
          </span>
          <h3 className="text-base font-bold tracking-wider text-[#bfa15f] uppercase flex items-center gap-2 font-display">
            <Mail className="w-4 h-4 text-[#bfa15f]" />
            {isTe ? "నిర్మాత ఆసక్తి & సహ-నిర్మాణ ప్రతిపాదన" : "Producer Interest & co-production proposal"}: "{project.titleEnglish}"
          </h3>
          <p className="text-[10px] text-slate-300 font-mono uppercase tracking-widest mt-1 font-bold">
            {isTe ? "సహ-నిర్మాణ వాటాలను సమీక్షించడానికి లేదా విజయరంగ గారితో డైలాగ్ నరేషన్ కొరకు సమయాన్ని కేటాయించండి" : "Propose co-production stakes or reserve a formal script dialogue reading with Vijayaranga"}
          </p>
        </div>

        {formSubmitted ? (
          <motion.div 
            className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-black/40 border border-[#bfa15f]/40 rounded-lg space-y-3 shadow-inner"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle2 className="w-12 h-12 text-[#bfa15f] animate-bounce" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#bfa15f]">{isTe ? "ప్రతిపాదన విజయవంతంగా నమోదైనది!" : "Proposal Logged Successfully!"}</h4>
            <p className="text-xs text-slate-300 font-mono font-bold">
              {isTe ? "విజయరంగ గారి స్క్రిప్ట్ డిపార్ట్‌మెంట్‌కు తెలియజేయబడింది." : "VIJAYARANGA script desk notified."}
            </p>
            <div className="text-xs text-slate-200 max-w-sm leading-relaxed font-semibold">
              {isTe 
                ? `"${project.titleTelugu}" పై మీ పెట్టుబడి ఆసక్తికి ధన్యవాదాలు. విజయరంగ గారు మీ ప్రతిపాదనను పరిశీలించి, సురక్షితమైన స్క్రిప్ట్ నివేదికతో మిమ్మల్ని నేరుగా సంప్రదిస్తారు.`
                : `Thank you for expressing co-production or investment interest in "${project.titleEnglish}". VIJAYARANGA will review your submission and contact your team directly with a password-secured treatment notebook.`}
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleInterestSubmit} className="flex flex-col gap-4 relative z-10 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                  {isTe ? "ప్రతిపాదిత పెట్టుబడిదారు / నిర్మాత పేరు" : "Proposing Investor / Producer Name"}
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-[#bfa15f]"><User className="w-4 h-4" /></span>
                  <input
                    type="text"
                    required
                    value={producerName}
                    onChange={(e) => setProducerName(e.target.value)}
                    placeholder={isTe ? "ఉదా: సితార ఎంటర్‌టైన్‌మెంట్స్ ప్రతినిధి" : "e.g., Warner / Sithara Representative"}
                    className="w-full bg-zinc-950 border border-[#bfa15f]/35 rounded px-3 py-2 pl-9 text-xs focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 text-white font-semibold h-10 shadow-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                  {isTe ? "సంప్రదింపు ఈమెయిల్ చిరునామా" : "Contact Email Address"}
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-[#bfa15f]"><Mail className="w-4 h-4" /></span>
                  <input
                    type="email"
                    required
                    value={producerEmail}
                    onChange={(e) => setProducerEmail(e.target.value)}
                    placeholder="e.g., representative@clancinema.com"
                    className="w-full bg-zinc-950 border border-[#bfa15f]/35 rounded px-3 py-2 pl-9 text-xs focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 text-white font-semibold h-10 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                  {isTe ? "మీ పెట్టుబడి పాత్ర" : "Your Investment Role"}
                </label>
                <select
                  value={interestRole}
                  onChange={(e) => setInterestRole(e.target.value)}
                  className="w-full bg-zinc-950 border border-[#bfa15f]/35 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 font-semibold cursor-pointer h-10 shadow-sm"
                >
                  <option value="Executive Producer" className="bg-zinc-950 text-white">{isTe ? "ఎగ్జిక్యూటివ్ ప్రొడ్యూసర్ (ఫైనాన్స్ హెడ్)" : "Executive Producer (Finance Head)"}</option>
                  <option value="Co-Producer" className="bg-zinc-950 text-white">{isTe ? "సహ-నిర్మాత / స్టూడియో భాగస్వామి" : "Co-Producer / Studio Brand partner"}</option>
                  <option value="Distributor" className="bg-zinc-950 text-white">{isTe ? "ప్రపంచ పంపిణీ సిండికేట్" : "Global Distribution Syndicate"}</option>
                  <option value="Talent Agent" className="bg-zinc-950 text-white">{isTe ? "ప్రతిభాంతుల నిర్వహణ సంస్థ" : "Talent Management Agency"}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                  {isTe ? "లక్ష్య పెట్టుబడి సామర్థ్యం" : "Target Investment Capacity"}
                </label>
                <select
                  value={fundingCapacity}
                  onChange={(e) => setFundingCapacity(e.target.value)}
                  className="w-full bg-zinc-950 border border-[#bfa15f]/35 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 font-semibold cursor-pointer h-10 shadow-sm"
                >
                  <option value="5-10 Crores" className="bg-zinc-950 text-white">5 - 10 Crores INR</option>
                  <option value="10-25 Crores" className="bg-zinc-950 text-white">10 - 25 Crores INR</option>
                  <option value="25-50 Crores" className="bg-zinc-950 text-white">25 - 50 Crores INR</option>
                  <option value="50 Crores+" className="bg-zinc-950 text-white">50+ Crores INR</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-[#bfa15f] uppercase font-bold">
                {isTe ? "సహకార ప్రతిపాదన వివరాలు" : "Inquiry & Collaboration Proposal Details"}
              </label>
              <div className="relative">
                <span className="absolute left-2.5 top-2.5 text-[#bfa15f]"><MessageSquare className="w-4 h-4" /></span>
                <textarea
                  required
                  value={producerMessage}
                  onChange={(e) => setProducerMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-zinc-950 border border-[#bfa15f]/35 rounded px-3 py-2.5 pl-9 text-xs focus:outline-none focus:border-[#bfa15f] focus:ring-1 focus:ring-[#bfa15f]/30 text-white font-semibold resize-none leading-relaxed shadow-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full primary-btn hover:scale-[1.01] active:scale-95 text-black py-3 rounded-lg font-mono font-bold uppercase text-xs transition-all shadow-[0_3px_15px_rgba(191,161,95,0.3)] flex items-center justify-center gap-2 h-11 cursor-pointer"
            >
              <Send className="w-4 h-4 text-black fill-black" strokeWidth={2.5} />
              {isTe ? "సహ-నిర్మాత ఆసక్తిని నమోదు చేయండి & పిచ్ బుక్ అభ్యర్థించండి" : "Register Co-Producer Interest & Request Pitch Book"}
            </button>
          </form>
        )}
      </section>
    </motion.div>
  );
}
