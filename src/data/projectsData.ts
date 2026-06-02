import trishoolamPoster from "../assets/images/trishulam_poster_new_1780390633685.png";
import missionBharathPoster from "../assets/images/mission_bharath_poster_new_1780391071389.png";
import parusavediPoster from "../assets/images/parusavedi_poster_1780302861588.png";
import megaPowerPoster from "../assets/images/mega_power_poster_new_1780390476385.png";
import rudhiravanamPoster from "../assets/images/rudhiravanam_poster_1780302898260.png";
import athmalingamPoster from "../assets/images/athmalingam_poster_1780242812688.png";

import { StoryboardScene } from "../types";

export interface ProjectDetail {
  id: string;
  titleTelugu: string;
  titleEnglish: string;
  taglineTelugu: string;
  taglineEnglish: string;
  genre: string;
  poster: string;
  status?: string;
  corePlot: string;
  synopsis: string;
  directorNotes: string;
  budget: string;
  timeline: string;
  marketPotential: string[];
  characters: {
    name: string;
    desc: string;
    actorSuggest?: string;
  }[];
  locations: string[];
  vfxHighlights: {
    title: string;
    desc: string;
  }[];
  storyboard: StoryboardScene[];
  confidentialActs?: {
    actNum: number;
    actTitle: string;
    codeName: string;
    conceptTe: string;
    conceptEn: string;
    redactedExcerpt: string;
  }[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: "mega-power",
    titleTelugu: "మెగా పవర్",
    titleEnglish: "MEGA POWER",
    taglineTelugu: "ది అల్టిమేట్ పవర్ ఆఫ్ లవ్",
    taglineEnglish: "The Force of Pure Royalty and Justice",
    genre: "High Voltage Action Drama | Family Emotional Saga",
    poster: megaPowerPoster,
    status: "Ready for Production",
    corePlot: "బద్ధ శత్రువులైన రెండు పెద్ద కుటుంబాల మధ్య వైరాన్ని, వారి శాంతి కోసం పోరాడిన ఒక యువకుడి (కార్తీక్) త్యాగాన్ని చూపించే అల్టిమేట్ పవర్ఫుల్ యాక్షన్ డ్రామా.",
    synopsis: "Two powerful royal dynasties, the Suryavamshi and the Chandravamshi, have ruled the bloodlands of coastal Andhra with an iron fist, locking themselves in a century-long blood feud. Karthik, the elder son of Chandravamshi, is raised in exile with teachings of absolute non-violence. When his younger brother is brutally assassinated, threatening to trigger an apocalyptic faction war across 50 districts, Karthik is forced to return. Instead of deploying weapons, he deploys legendary diplomatic tactics, emotional bonds, and raw physical valor to dismantle their deep-seated vengeance. A massive scale emotional action spectacle that proves the ultimate power of devotion over violence.",
    directorNotes: "Designed for standard multi-generational blockbuster theatres. Extremely rich warm color palettes, highly stylized slow-motion family reuniunes, high contrast dust effects, and majestic palace backdrops. Emotional highlights clashing with massive scale combat choreography.",
    budget: "120 - 150 Crores",
    timeline: "12 - 18 Months",
    marketPotential: [
      "Secures maximum theatrical footprint due to its highly appealing family emotions and star elements.",
      "High value in South Indian regional satellite rights and Hindi-dubbed digital platform deals.",
      "Excellent scope for grand scale music tracks and high-energy festival audio launches."
    ],
    characters: [
      { name: "కార్తీక్ (Karthik)", desc: "Raised away from faction domains, he is a highly-educated, calm, yet physically peerless prince of peace.", actorSuggest: "Superstar" },
      { name: "దేవయాని (Devayani)", desc: "A fiery, independent princess of the rival Suryavamshi family who secretly leads environmental struggles.", actorSuggest: "Main Heroine" },
      { name: "రాజేంద్ర ప్రసాద్ (Rajendra)", desc: "Karthik's uncompromising father, whose hardened facial scars tell stories of a hundred silent battles.", actorSuggest: "Senior Actor" },
      { name: "ధర్మ (Dharma)", desc: "A ruthless, warmongering uncle who gains immense money by keeping the dynastic war burning.", actorSuggest: "Powerful Antagonist" }
    ],
    locations: [
      "Vast, heritage royal palace complexes in Rajasthan",
      "Picturesque, green high-contrast coconut plantations of Godavari",
      "Epic rocky mountain valleys of Kurnool / Rayalaseema",
      "High-stakes glass skyscrapers of Singapore and Malaysia"
    ],
    vfxHighlights: [
      { title: "సింహాసన ప్రవేశం (The Palace Ascent)", desc: "A highly stylized, 3D tracking sequence mapping the history of the fortress walls through moving gold engravings." },
      { title: "ధూళి తుఫాను ఫైట్ (Dust Storm Arena)", desc: "A stunning, slow-motion martial arts block where combat moves are highlighted by beautifully simulated swirling golden dust particles." },
      { title: "అమ్మవారి పండుగ (The Goddess Festival)", desc: "An immersive, photorealistic digital recreation of a grand temple backdrop featuring millions of glowing lamps and flying flower petals." }
    ],
    storyboard: [
      {
        sceneNumber: 1,
        title: "The Silent Returns",
        description: "A sleek black SUV stops outside a massive wooden fortress gate. Karthik steps out into the dry dust as dry leaves blow across the courtyard.",
        visualCue: "High-contrast golden sunlight, long shadows, and cinematic slow-motion focus pacing.",
        soundEffect: "A soft, ominous block-flute melody and ticking pocketwatch."
      },
      {
        sceneNumber: 2,
        title: "The Assembly Clash",
        description: "Inside the royal court, elders stand on separate sides staring with intense anger. Karthik enters, placing a traditional silver crown on the dividing table.",
        visualCue: "Symmetry framing, rich wood colors, sharp shafts of morning sunlight slicing through dust.",
        soundEffect: "A thudding royal staff sound and rising dramatic orchestral violins."
      },
      {
        sceneNumber: 3,
        title: "The Forest Chase",
        description: "Karthik runs through a dense, green Godavari banana plantation to rescue a child, dodging fast-speed silver sickles thrown by faction riders.",
        visualCue: "Dynamic hand-held camera movement, intense green tones, and vibrant lens flares.",
        soundEffect: "Rustling forest weeds, horse hooves thundering, and weapon swooshes."
      },
      {
        sceneNumber: 4,
        title: "The Goddess Shield",
        description: "Rival groups gather around a giant gold statue of the Goddess. Karthik stands in the middle, stopping a descending ceremonial sword with his bare hands.",
        visualCue: "Extreme high contrast golden hour lighting, red vermillion powder flying in slow motion.",
        soundEffect: "Massive brass horns, rapid traditional drums, and temple bells clanging."
      },
      {
        sceneNumber: 5,
        title: "The Golden Union",
        description: "The dynastic walls are broken. The two leaders hug under a shower of golden flower petals. Karthik and Devayani stand together as peace is proclaimed.",
        visualCue: "Brilliant glowing golden lighting, extremely wide grand cinematic drone shot.",
        soundEffect: "Magnificent chorus vocal peak, emotional string symphony, and silent resolution."
      }
    ]
  },
  {
    id: "trishoolam",
    titleTelugu: "త్రిశూలం (త్రిపురాంతకం)",
    titleEnglish: "TRISHOOLAM",
    taglineTelugu: "ది పవర్ ఆఫ్ బ్రదర్స్ - సృష్టి, రక్షణ, శక్తి ఏకత్వ పోరాటం",
    taglineEnglish: "The Power of Brothers - When Creation, Protection, and Destruction Unite",
    genre: "High-Explosive Bio-Mythological Action Thriller | Pan-Indian Cinematic Epic",
    poster: trishoolamPoster,
    status: "Ready for Production",
    corePlot: "చైనా నగరంలోని బయో-ల్యాబ్స్ ద్వారా పంపబడే ప్రాణాంతక వైరస్ 'బ్లాక్ లోటస్' చికిత్సను శేషాచలం అడవుల నుండి దొంగిలించడానికి పన్నాగం పన్నిన గ్లోబల్ డాన్ విజయచంద్రను బ్రహ్మ, విష్ణు, మహేశ్వరుల తత్వాలు గల ముగ్గురు సోదరులు ఎలా అడ్డుకున్నారు అనేది కథาంశం.",
    synopsis: "Separated as children during a torrential rain disaster in Seshachalam forest, three brothers raised separately meet in an unexpected clash of fates. Shankar (Brahma / Knowledge) grows up to be a quiet, meticulous cancer research scientist in Hyderabad, operating key forensic and pressure combat skills. Sagar (Vishnu / Protection) is raised as an aggressive, high-speed bike-chase cop in Vijayawada. Bharat (Shiva / Power) is a robust eco-farmer in Tirupati defending indigenous lands. Under the threat of Project Rudragal, a bio-chemical pathogen designed in China labs to target world populations, their paths intersect in Chittoor. Guided by maternal elder Janjama, their matching Trishula birthmarks spark and glow in action, binding their minds, forces, and souls into a unified, invincible shield of justice.",
    directorNotes: "Designed for a massive pan-Indian theatrical canvas. Visual dualisms: clinical fluorescent lab blues of Hyderabad vs. dry earthy action tones of Seshachalam forests and deep sacred shrines of Srisailam/Ahobilam. Heavy use of thundering rain visual effects, glowing skin marks, and energetic particles.",
    budget: "100 - 130 Crores",
    timeline: "12 - 15 Months",
    marketPotential: [
      "Exceptional pan-Indian demand due to the highly appealing triple-star format combining mythology with bio-tech thriller.",
      "Vast overseas drawing power in European and North American multiplexes due to state-of-the-art VFX.",
      "High streaming acquisition value on major platforms (Netflix / Prime) due to deep content architecture."
    ],
    characters: [
      { name: "శంకర్ (Shankar - Brahma/Mind)", desc: "పెద్దన్న (28). ల్యాబ్ రీసెర్చ్ డాక్టర్. శత్రువుల నాడీ వ్యవస్థ ప్రెజర్ పాయింట్లను తట్టి క్షణాల్లో నిశ్చలం చేయ గల నెర్వ్-బ్లాక్ మార్షల్ ఆర్ట్స్ స్పెషలిస్ట్.", actorSuggest: "Superstar Rank" },
      { name: "సాగర్ (Sagar - Vishnu/Justice)", desc: "రెండో అన్న (26). విజయవాడ పోలీస్ వింగ్ డిటెక్టివ్. పవర్ ఫుల్ రాయల్ ఎన్‌ఫీల్డ్ వీలీ చేజింగ్స్ మరియు హై-స్పీడ్ విన్యాసాల స్పెషలిస్ట్.", actorSuggest: "Mass Native Hero" },
      { name: "భరత్ (Bharat - Shiva/Power)", desc: "తమ్ముడు (25). తిరుపతి ఆధునిక సేంద్రీయ రైతు నాయకుడు, భారీ కండరాల పవర్ మరియు కోపం వచ్చినప్పుడు ప్రళయం సృష్టించగల మాస్ యాక్టర్.", actorSuggest: "Youth Icon" },
      { name: "విలియన్ జయచంద్ర (Jayachandra - Asura)", desc: "గ్లోబల్ డాన్ (చైనా). అపరిమిత అధికార కాంక్ష కోసం శేషాచలం అడవుల మూలికలను అపహరించి బయోవార్ కుట్రకు తెరిలేపిన సూత్రధారి.", actorSuggest: "Elite Villain" },
      { name: "ధ్రువతార / అను (Love Leads)", desc: "కుట్రలను చేధించడానికి ప్రాణాలను పణంగా పెట్టిన రీసెర్చ్ శాస్త్రవేత్తలు. విలన్ల కూటమితో ముడిపడిన ప్రత్యేక ట్విస్ట్ గల పాత్రలు.", actorSuggest: "Leading Heroines" },
      { name: "జంజమ (Guru Janjama)", desc: "శేషాచలం గిరిజన గురువు, అగస్త్య మహర్షి పురాతన తాళపత్ర రహస్యాలను రక్షించే आध्यात्मिक మార్గదర్శి.", actorSuggest: "Legendary Character" }
    ],
    locations: [
      "Shanghai high-tech futuristic biochemical glass complexes (China)",
      "Hyderabad Cancer Research Division fluorescent labs",
      "Vijayawada Prakasam Barrage - high-speed storm chase",
      "Sacred temples of Srisailam (Underwater Chambers) & Ahobilam (Serpent Grotto)",
      "Vast pristine rain-drenched valleys of Seshachalam Forest"
    ],
    vfxHighlights: [
      { title: "నాడీ వ్యూహం (The Neuro-Pressure Strike Visual)", desc: "శంకర్ శత్రువుల నరాల పాయింట్ నొక్కగానే, వారి శరీరంలో బయో-ఎలక్ట్రికల్ కిరణాలు వ్యాపించి స్తంభించిపోయే అల్ట్రా-స్లో మోషన్ VFX." },
      { title: "తిరుపతి ఇంటర్వెల్ క్లాష్ (The Glowing Trident Conjunction)", desc: "depicting rain droplets halting in mid-air as the three brothers join forces and their identical shoulder trident marks glow in majestic gold." },
      { title: "అగస్త్య గుప్త ఆలయ ప్రవేశం (The Vault of Agastya)", desc: "శ్రీశైలం పాతాళ గంగ అడుగున ఉన్న గుహలు నీటి అడ్డుగోడలను ఛేదించి, బ్రహ్మదండ, విష్ణుచక్ర, శివ త్రిశూల ఆయుధాలను ప్రతిష్టించే అద్భుత ఆధ్యాత్మిక విజువల్స్." }
    ],
    storyboard: [
      {
        sceneNumber: 1,
        title: "Shanghai Bio-Lab Command",
        description: "Inside a dark spherical laboratory overlooking the rain-swept Shanghai harbor. Jayachandra is analyzing the biochemical blueprint titled 'PROJECT RUDRAGAL'.",
        visualCue: "Deep blue and neon-crimson console lights casting ominous highlights on Jayachandra's smiling face.",
        soundEffect: "Heavy mechanical server cooling hums and a soft classical string crescendo transition."
      },
      {
        sceneNumber: 2,
        title: "The Childhood Sunder",
        description: "Flashback 2006. A police transport truck crashes on a muddy hairpin loop inside Seshachalam during an intense storm. The three brothers are washed away by separate river rapids.",
        visualCue: "Monochrome flash visual style with highly saturated orange flames reflecting on wet leaves.",
        soundEffect: "Deafening thunder claps, engine explosion, and a heart-rending lullaby vocal melody."
      },
      {
        sceneNumber: 3,
        title: "Nerve Block Cafe Brawl",
        description: "In a sleek Hyderabad coffee shop, local operatives try to kidnap Anu. Shankar calmly walks in. Using precise, scientific pressure-point strikes, he disables them with single finger-touch neural locks.",
        visualCue: "Super stylized slow-motion bone-cracking micro-x-ray overlays of nerve fibers locking.",
        soundEffect: "Sleek electronic synth swipes and precise sub-bass dull impacts."
      },
      {
        sceneNumber: 4,
        title: "The Tirupati Conjunction",
        description: "Interval Climax. Heavy rain pours at the main bus terminal. In a combined battle against corporate bio-mercenaries, Shankar, Sagar, and Bharat stand backs matched. When a stray power line cuts, their matching birthmarks illuminate simultaneously under the electric spark.",
        visualCue: "Splendid golden particles flowing from their shoulders, freezing the falling rain droplets in mid-air in circular motion.",
        soundEffect: "Epic holy choral chant, high definition rain splashes, and a resounding metallic brass drop."
      },
      {
        sceneNumber: 5,
        title: "Synthesizing the Trishulam",
        description: "Inside Srisailam's deep sub-lake sanctum, the brothers simultaneously hold the ancient bronze trident of Agastya. A magnificent shield of golden cosmic light spreads, neutralizing the biological fallout.",
        visualCue: "Luminous, high-energy particle storm, pristine spiritual symmetries, and a blinding gold and cyan screen fade.",
        soundEffect: "A celestial, ringing cosmic bell chant, massive string orchestra climax, and silent completion."
      }
    ],
    confidentialActs: [
      {
        actNum: 1,
        actTitle: "Act I: Seshachalam Origin & Project Rudragal",
        codeName: "CODE: RUDRAGAL_MUTATION",
        conceptTe: "చైనాలోని షాంఘై నగరంలో గ్లోబల్ విలన్ జయచంద్ర బయోవార్ కుట్రను మొదలుపెడతాడు. శేషాచలం అడవులలో మాత్రమే లభించే 'బ్లాక్ లోటస్' మ్యుటేషన్ ఉపయోగించి వైరస్, దానికి విరుగుడును సృష్టించి ప్రపంచాన్ని బ్లాక్‌మెయిల్ చేసేదే 'ప్రాజెక్ట్ రుద్రగల్'. ఫ్లాష్‌బ్యాక్‌లో రంగా రావు, విజయలక్ష్మి దంపతుల ముగ్గురు ముద్దుల కుమారులు (శంకర్, సాగర్, భరత్) వర్షం కురుస్తున్న అడవిలో పోలీసుల చేజ్ కారణంగా వేరు చేయబడుたる.",
        conceptEn: "In Shanghai, China, global antagonist Jayachandra initiates a bio-terrorism operation called 'Project Rudragal'. By exploiting Seshachalam forest's hidden resources, they bio-engineer 'Black Lotus', a fatal virus mutation, to hold global networks hostage. In a parallel historical trace, a high-stakes rain accident in Seshachalam (2006) separates three young brothers with matching trident marks.",
        redactedExcerpt: "SCENE 1-5 [CONFIDENTIAL] Location: Shanghai Glass Tower. Thunderstorms. A glowing hologram reveals Seshachalam coordinates. 'If they want the vaccine, they will beg on their knees... initiate Project RUDRAGAL.' Flashback 2006: Seshachalam forest storm, police jeep slides, boys separated."
      },
      {
        actNum: 2,
        actTitle: "Act II: Divided Fates in Twin Cities",
        codeName: "CODE: TWIN_CITY_REVELATION",
        conceptTe: "హైదరాబాద్‌లో శంకర్ ఒక ప్రముఖ క్యాన్సర్ ల్యాబ్ సైంటిస్ట్‌గా ఎదుగుతాడు. అతను అను అనే అమ్మాయితో ప్రేమలో పడతాడు, అయితే అను తండ్రి జయప్రకాశ్ గ్లోబల్ విలన్ జయచంద్రతో భాగస్వామ్యం కలిగి ఉంటాడు. విజయవాడలో సాగర్ పోలీస్ ఫోర్స్ లో చేరి బైక్ చేజింగ్స్ చేస్తూ ధ్రువతారను కాపాడతాడు. శేషాచలంలో భరత్ ఒక తిరుగుబాటు రైతుగా ఎదుగుతూ నల్లమల కొండలను రుద్రమణి రెడ్డి ప్రాజెక్టుల నుండి కాపాడుతుంటాడు.",
        conceptEn: "Shankar becomes an elite cancer research doctor in Hyderabad, using nerve-lock combat style, and falls in love with Anu (the daughter of cartel accessory Jayaprakash). Sagar rises as an aggressive chase cop in Vijayawada, protecting Dhruvatara, who holds leaked Chinese data. Bharat leads localized eco-protests in Seshachalam against the regional tyrant, Rudramani Reddy.",
        redactedExcerpt: "SCENE 6-12 [CONFIDENTIAL] Location: Hyderabad Lab. Shankar intercepts a corrupted DNA code. In Vijayawada, Sagar performs a 360-degree motorbike wheelie to stop biochemical thieves. 'Your pressure strikes don't just break bones, they lock neural fibers.'"
      },
      {
        actNum: 3,
        actTitle: "Act III: The Trident Confluence (Interval Peak)",
        codeName: "CODE: TRIDENT_INTERVAL",
        conceptTe: "ధ్రువతార చైనా ల్యాబ్ నుండి లీక్ చేసిన రహస్య సమాచారాన్ని సాగర్ కి అందించడానికి తిరుపతి బస్ స్టేషన్‌కు చేరుకుంటుంది. జయచంద్ర గుండాలు ఆమెపై దాడి చేయగా, ముగ్గురు సోదరులు (శంకర్, సాగర్, భరత్) వేర్వేరు మార్గాల్లో అక్కడకు చేరుకుంటారు. భారీ వర్షంలో జరిగే ఆ ఫైట్‌లో ముగ్గురూ కలిసి పోరాడుతున్నప్పుడు వారి భుజాలపై ఉన్న త్రిశూల పుట్టుమచ్చలు పవర్ ఫుల్ మెరుపులతో వెలుగుతాయి. వారు తాము కోల్పోయిన సోదరులమని గుర్తిస్తారు.",
        conceptEn: "Dhruvatara reaches Tirupati Bus Terminal to deliver a decrypt key tracing the virus coordinates. Handlers corner her. Intervening separately, Shankar, Sagar, and Bharat launch a synchronized rain-soaked counter-offensive. During the high-octane battle, their shoulders catch electrical static, illuminating their hidden biological matching Trishula marks in a shocking fusion discovery.",
        redactedExcerpt: "SCENE 13-20 [CONFIDENTIAL] Location: Tirupati Bus Depot, Heavy Rain. Split-screen synchronization. Three individual strikes merge. Slashes tear their sleeve fabrics—revealing the glowing golden birthmarks. 'Sagar... Bharat... It is you!'"
      },
      {
        actNum: 4,
        actTitle: "Act IV: The Final Yuga (Divine Weapon Hunt)",
        codeName: "CODE: FINAL_YUGA_ASCENT",
        conceptTe: "రెండో భాగం అగస్త్య మహర్షి పురాతన శేషాచలం గుహలను అన్వేషించడంతో మొదలవుతుంది. జంజమ గిరిజన గురువు తాళపత్రాల ద్వారా సోదరులను శ్రీశైలం పాతాళగంగ లోపల ఉన్న జల ఆలయానికి మరియు అహోబిలం సర్ప గుహకు పంపుతాడు. అక్కడ వారు విష్ణుచక్ర, బ్రహ్మదండ, మరియు శివ త్రిశూల తత్వాలను పరీక్షించుకొని అద్భుతమైన సాయుధ రక్షక యంత్రాన్ని లాక్ చేస్తారు. చివరి పోరాటంలో జయచంద్రను అంతం చేసి ప్రకృతిని రక్షిస్తారు.",
        conceptEn: "Part 2 focuses on hunting the historic alchemical Agastya vault. Following ancient manuscripts decodes by Guru Janjama, the brothers complete supernatural sacred trials: retrieving the solar energy orb inside Srisailam's deep lake shrine and conquering the giant snake trial at Ahobilam to synthesize Agastya's ancient energy matrix, neutralizing Jayachandra's bio-weapon at last.",
        redactedExcerpt: "SCENE 21-36 [CONFIDENTIAL] Location: Srisailam Patalaganga & Ahobilam Grottoes. Volumetric water temple depths. The ancient metal doors open only when three trident hands are pressed together. 'The myth was real—we are the shields of this land.'"
      }
    ]
  },
  {
    id: "parusavedi",
    titleTelugu: "పరుసవేది",
    titleEnglish: "PARUSAVEDI",
    taglineTelugu: "ది ఫైవ్ ఫ్రాగ్మెంట్స్",
    taglineEnglish: "The Mystery of Alchemy & Legend of Agastya",
    genre: "Mystery Adventure | Historical & Archaeological Fantasy",
    poster: parusavediPoster,
    status: "Ready for Production",
    corePlot: "ఇనుమును బంగారంగా మార్చే 'పరుసవేది' అనే అద్భుత రాయిని అగస్త్య మహర్షి ఐదు ముక్కలుగా చేసి భారత దేశంలోని ఐదు పుణ్యక్షేత్రాల్లో దాచుతాడు. ఆ వారసత్వాన్ని మోస్తున్న హీరో (విక్రమ్) ఆ ముక్కలను శత్రువుల కంటే ముందే ఎలా సేకరించాడు?",
    synopsis: "Centuries ago, the ancient sage Agastya developed 'Parusavedi', a miraculous alchemical crystalline stone capable of turning base metals into pure gold, and embodying the secrets of atomic conversion. Realizing its threat if placed in greedy hands, Agastya divided the stone into five distinct fragments, concealing them under complex astronomical locks inside five sacred temples across India. In the modern era, Vikram, a genius but struggling archaeologist, discovers a hidden palm-leaf manuscript that decodes the coordinates. But a deadly mercenary shadow-organization led by the ruthless Rudra is hot on the trail. Vikram must deploy his skills, decipher ancient riddles, and travel through five sacred steps of India before the alchemical balance is hijacked.",
    directorNotes: "Inspired by classic archaeological adventure cinema but deeply rooted in sacred Indian temples and folklore. Heavy use of warm candle/torchlit shadows, glowing ancient inscriptions, and beautiful underground stone architecture. Visual contrast between antique relics and modern high-tech research scanners.",
    budget: "100 - 120 Crores",
    timeline: "10 - 15 Months",
    marketPotential: [
      "Extremely popular genre with graphics and puzzle adventure lovers globally.",
      "High potential in global digital platforms (Netflix/Prime) due to its historical-adventure structure.",
      "Excellent multi-generational appeal, making it a perfect holiday release."
    ],
    characters: [
      { name: "విక్రమ్ (Vikram)", desc: "A brilliant, athletic archaeologist and field specialist with a deep understanding of ancient Sanskrit and alchemical symbols.", actorSuggest: "Hero" },
      { name: "అన్వేష (Anvesha)", desc: "The guardian of the Agastya manuscript, displaying profound yogic abilities and ancient warfare skills.", actorSuggest: "Female Lead" },
      { name: "శాస్త్రి గారు (Sastri Garu)", desc: "A respected old historian who secretly leaks temple secrets to the highest international bidder.", actorSuggest: "Betraying Mentor" },
      { name: "రుద్ర (Rudra)", desc: "A ruthless, high-tech industrialist who wants the alchemical stone to fuel a global economic monopoly.", actorSuggest: "Vicious Antagonist" }
    ],
    locations: [
      "Bhairavakona temple ruins (Srisailam forests)",
      "Manikarnika Ghat underground chambers (Kashi / Varanasi)",
      "Monolithic giant stone complexes of Hampi",
      "Ahobilam hills high peaks",
      "The holy revolving shrine of Arunachalam"
    ],
    vfxHighlights: [
      { title: "నీలిరంగు చితి మంటలు (Blue Pyre Altar)", desc: "A chillingly beautiful sequence where an ancient altar in Varanasi ignites with mystical blue alchemical fire." },
      { title: "డిజిటల్ మ్యాప్ (Skyward Celestial Blueprint)", desc: "A majestic golden holographic map projected into the night sky by aligning light through five crystal keyholes." },
      { title: "అండర్ వాటర్ గుళ్లు (Submerged Sanctuary)", desc: "Vikram navigating high-current deep waters to discover an ancient shrine intact beneath a deep mountain lake." },
      { title: "మాతృశక్తి ఆవిర్భావం (The Emergence of Gaia)", desc: "A celestial, volumetric CGI sequence where nature herself manifests as a protective force during the alchemical assembly." }
    ],
    storyboard: [
      {
        sceneNumber: 1,
        title: "The Alchemist's Scripture",
        description: "An old leather-bound document with Sanskrit letters glowing in a dark research room. Vikram analyzes the symbols using a UV scanner.",
        visualCue: "Deep blue and violet UV lighting across glowing golden alchemical text marks.",
        soundEffect: "The high-pitch hum of a digital scanner and rustling of fragile ancient leaves."
      },
      {
        sceneNumber: 2,
        title: "Bhairavakona Secret Door",
        description: "A hidden stone door embedded in a dry waterfall face slides open, revealing a long dark underground temple stairway.",
        visualCue: "Torches igniting automatically in a chain sequence, casting moving shadows across massive stone pillars.",
        soundEffect: "Heavy grinding of giant granite slabs and the crackling of sudden timber torches."
      },
      {
        sceneNumber: 3,
        title: "Hampi Water Chamber",
        description: "Vikram dives into a flooded subterranean reservoir below Hampi, tracking a glowing turquoise key-stone beneath the water.",
        visualCue: "Beautiful shimmering underwater rays, floating dust, and deep cyan and turquoise hues.",
        soundEffect: "Muffled water bubbling, heartbeats, and deep string instruments."
      },
      {
        sceneNumber: 4,
        title: "The Kashi Confrontation",
        description: "In the misty morning of Manikarnika Ghat, Rudra's mercenaries corner Vikram. A high-stakes martial arts chase erupts across ancient rooftops.",
        visualCue: "Dense morning fog, orange twilight sky, silhouetted martial arts leaps, and cinematic crane tracking.",
        soundEffect: "Swooshing staff fights, running footsteps on ancient bricks, and heavy brass brass pads."
      },
      {
        sceneNumber: 5,
        title: "Reconstituting Parusavedi",
        description: "Inside the core temple of Agastya, Vikram lines up all 5 pieces. They float, pull together, and release an blinding, elegant golden energy dome.",
        visualCue: "Luminous gold particles flowing, pristine symmetry, and holy glowing energy patterns across the screen.",
        soundEffect: "Deafening energetic hum, crystal shattered chimes, and an inspiring orchestral strings release."
      }
    ]
  },
  {
    id: "athmalingam",
    titleTelugu: "ఆత్మలింగం",
    titleEnglish: "ATHMALINGAM",
    taglineTelugu: "ది గేట్ ఆఫ్ ఘోస్ట్స్",
    taglineEnglish: "The Gate of Ghosts - The Ultimate Spiritual Shield",
    genre: "Horror Comedy | Socio-Fantasy | Epic Supernatural Thriller",
    poster: athmalingamPoster,
    status: "Ready for Production",
    corePlot: "మరణానంతర ఆత్మలకు మోక్షం ప్రసాదించే 'ఆత్మలింగం' రుద్రకోట అనే మాయా అద్దాల కోటలో బందీ అయి ఉంటుంది. ఆ కోట వారసుడైన హీరో (సూర్యం) తన మిత్రులతో కలిసి అజ్ఞాత ఆత్మల నుండి, క్షుద్ర తాంత్రికుల నుండి లింగాన్ని ఎలా కాపాడాడు?",
    synopsis: "At the dawn of creation, a divine fossil of absolute cosmic energy - the ATHMALINGAM - was secretly forged, locking in the ultimate threshold between life, death, and spatial realms. Hidden for thousands of years within the mystical forest fort of RUDRAKOTA, its seal is now under extreme threat of dark apocalyptic forces. Our protagonist, SURYAM, an archaeologist's son plagued by recurring nightmares of burning black flames, returns to his native land Rudrakota. He is unaware of his deep blood lineage as the sworn guardians of the Athmalingam. Drawn into a web of ancient curses, restless spirits, and a high-stakes conspiracy, Suryam must awaken his true inner spiritual legacy before the dark moon eclipse reveals the sanctuary's coordinates and unleashes absolute chaos.",
    directorNotes: "The ultimate commercial blend of lighthearted horror-comedy and awe-inspiring, large-scale socio-fantasy adventure. Stunning visual concepts featuring an ancient fort made of mirrors. Glowing cyan and ice-blue spectral colors contrasting with warm organic temple torches.",
    budget: "80 - 100 Crores",
    timeline: "10 - 15 Months",
    marketPotential: [
      "Highly lucrative horror-comedy market segment with exceptional theatrical and satellite TV draw.",
      "VFX-heavy spectacle makes it a mandatory big-screen watch for family groups.",
      "Strong potential for regional franchise expansions and horror-themed interactive parks."
    ],
    characters: [
      { name: "సూర్యం (Suryam)", desc: "An archaeologist's son, a popular travel vlogger whose nightmares draw him back to the haunted ruins of Rudrakota.", actorSuggest: "Protagonist" },
      { name: "దీపిక (Deepika)", desc: "A mysterious royal priestess carrying the secret key to the alchemical Mirror Chambers of Rudrakota.", actorSuggest: "Female Lead" },
      { name: "పప్పీ (Puppy)", desc: "Suryam's loyal, easily-scared cameraman who provides side-splitting situational comedy throughout the spooky adventure.", actorSuggest: "Comedy Main" },
      { name: "తారానాథ్ (Taranath)", desc: "A powerful, sinister occult practitioner seeking to lock the Athmalingam or unleash spiritual armies.", actorSuggest: "Occult Antagonist" },
      { name: "బేతాళుడు (Bethaludu)", desc: "The ancient spirit guardian of the gate, who challenges Suryam with ancient riddles to test his worthiness.", actorSuggest: "Spiritual Entity" }
    ],
    locations: [
      "Dense, mist-shrouded forests of Ananthagiri Hills",
      "Rudrakota (A massive, custom designed 5-acre gothic mirror fort set)",
      "The Maze of Mystic Mirrors",
      "Underground chamber of the Athmalingam Shrine"
    ],
    vfxHighlights: [
      { title: "అదృశ్య వారధి (The Ghost Bridge)", desc: "A breathtaking sequence where a bridge composed entirely of glowing translucent souls forms across a bottomless volcanic canyon." },
      { title: "మాయా అద్దాల యుద్ధం (The Mirror War)", desc: "An innovative action scene where Suryam fights evil guards who strike entirely from within the reflection coordinates of mystic mirrors." },
      { title: "ఆత్మల సైన్యం (The Spectral Flight)", desc: "A high-fidelity CGI visual sequence representing hundreds of thousands of serene, freed souls flying towards the heaven gate." }
    ],
    storyboard: [
      {
        sceneNumber: 1,
        title: "The Foreboding Symbols",
        description: "An ancient scroll written by legendary saints is uncovered, describing the birth of the Athmalingam. An eerie mystical energy ripples through the sacred grounds.",
        visualCue: "Slow camera push forward. Pitch black scene layered with cold blue cinematic hues and floating embers.",
        soundEffect: "Ominous digital sweeping wind pad / digital interference rumbles."
      },
      {
        sceneNumber: 2,
        title: "The Curse of Rudrakota",
        description: "A series of supernatural events plagues the remote forest outpost. Screaming winds and spectral sightings rise as an old administrative seal begins to shatter.",
        visualCue: "Dense chiaroscuro contrast. Striking amber warning lights flashing slowly with ticking digital countdown indicators.",
        soundEffect: "Heavy heartbeat bass pulses and ticking sound effects."
      },
      {
        sceneNumber: 3,
        title: "The Awakening",
        description: "Suryam touches a dormant guardian obelisk. Majestic golden patterns erupt across his arms, revealing his cosmic hereditary blueprint and binding him directly to the relic's destiny.",
        visualCue: "Fast-paced blockbuster scene flashes: Tyres skidding sideways in heavy downpour, a mechanical iris doors turning, and dark silhouettes chasing in shadows.",
        soundEffect: "Epic dramatic percussion and aggressive movie action riser."
      },
      {
        sceneNumber: 4,
        title: "The Apocalypse Assault",
        description: "A shadow cult initiates a massive siege on the ancient underground temple vaults of Rudrakota, unleashing cursed spectral spirits to overpower Suryam.",
        visualCue: "A brilliant blinding golden light explodes from the center of a mechanical iris vault, capturing the ultimate suspension.",
        soundEffect: "Deafening explosive riser culminating in a sub-bass blast drop."
      },
      {
        sceneNumber: 5,
        title: "The Emergence",
        description: "Suryam stands at the center of the sanctuary. The Athmalingam completely manifests in sublime golden and cyan fire, disintegrating the shadow forces and restoring cosmic order.",
        visualCue: "Heavy gold steel VR logo glowing deeply under volumetric studio lights. Transitions to glowing contact details.",
        soundEffect: "Sustained heavenly, epic orchestral string chord with a resonant bell chime."
      }
    ]
  },
  {
    id: "mission-bharath",
    titleTelugu: "మిషన్ భారత్",
    titleEnglish: "MISSION BHARATH",
    taglineTelugu: "సంతకం కంటే ఆశయం పవర్ఫుల్",
    taglineEnglish: "The Power of Signature - An Inspiring Crusade",
    genre: "Political Action Drama | Uplifting Social Message",
    poster: missionBharathPoster,
    status: "Ready for Production",
    corePlot: "ఒక సాధారణ స్కూల్ క్లర్క్ (శివ) వ్యవస్థలోని అవినీతి వల్ల IAS ఆఫీసర్గా తిరిగి వచ్చి 28 రాష్ట్రాల్లో విస్తరించిన విద్యాశాఖ కుంభకోణాన్ని ఎలా అరికట్టాడు? 'సంతకం కంటే ఆశయం పవర్ఫుల్' అని నిరూపించే కథ.",
    synopsis: "Shiva works as a humble school clerk in an impoverished border village, witnessing the crumbling infrastructure and stolen opportunities of local children first-hand. When a corrupt education mafia compromises the system and causes the tragic collapse of their school, Shiva decides to fight back. Instead of protesting, he dedicates himself to cracking the civil services. Rising like a phoenix, Shiva returns to his district as a powerful IAS officer. He uncovers a massive multi-state web of education-funding fraud that spans all 28 states of India. Embarking on 'Mission Bharath', he rewrites the destiny of millions of students, proclaiming that a true mission in life is far more powerful than any administrative signature.",
    directorNotes: "A highly grounded, intense, yet deeply emotional social drama with blockbuster commercial elements. Rich natural earthy tones of the villages transitioning to cold, clean, authoritative stone white in Delhi ministries. Highly relatable storytelling that resonates with families and youth alike.",
    budget: "60 - 80 Crores",
    timeline: "8 - 10 Months",
    marketPotential: [
      "Exceptional emotional connect that guarantees family audience turnout across rural and urban markets.",
      "Great potential for tax-exempt status in multiple states due to its powerful message on education.",
      "High ROI (Return on Investment) with steady, long-running theatrical receipts."
    ],
    characters: [
      { name: "శివ IAS (Shiva IAS)", desc: "From a quiet, diligent school clerk to an uncompromising, iron-willed administrative IAS reformer.", actorSuggest: "Protagonist" },
      { name: "విక్రాంత్ (Vikranth)", desc: "The wealthy, sinister head of an executive recruitment cartel and a senior member of the civil services selection board.", actorSuggest: "Main Antagonist" },
      { name: "రామ్ నాథ్ చౌదరి (Ram Nath Choudhary)", desc: "An old school principal whose life-long teachings on integrity inspire Shiva's grand crusade.", actorSuggest: "Mentor" },
      { name: "బుల్లెట్ బాబు (Bullet Babu)", desc: "An entertaining, eccentric local deputy who provides brilliant comedy and unexpected support in Shiva's missions.", actorSuggest: "Comedy Relief" }
    ],
    locations: [
      "New Delhi Government corridors: Rashtrapati Bhavan & North Block sets",
      "Andhra-Karnataka border rustic villages",
      "District Collectorate administrative complexes",
      "Vast heritage schools and universities"
    ],
    vfxHighlights: [
      { title: "స్కూల్ కూలిపోయే దృశ్యం (The Monsoon Tragedy)", desc: "A heart-wrenching, photorealistic monsoon storm sequence where a neglected old school building structurally collapses." },
      { title: "డిజిటల్ డేటా హ్యాకింగ్ (Unveiling the Cartel)", desc: "A sleek, highly visual representation of cyber audit systems tracking and displaying illegally diverted educational grants across a glowing 3D map of India." },
      { title: "సంతకాల తరంగాలు (Signature Wave Climax)", desc: "A creative, stylized sequence showing millions of students' digital signatures merging to build the national charter of education." }
    ],
    storyboard: [
      {
        sceneNumber: 1,
        title: "The Clerk's Decree",
        description: "Shiva is seen stacking old, dusty ledgers in a dark corner of a dilapidated school library. Outside, rain starts hitting the classroom windows.",
        visualCue: "Warm vintage shadows contrasting with cold gray rain light slicing through cracked window panes.",
        soundEffect: "The steady rhythm of rain on metal sheets and the scratching of a worn-out pen."
      },
      {
        sceneNumber: 2,
        title: "The Tragedy Strikes",
        description: "The school roof begins to crack under the weight of monsoon water. A massive roof beam collapses. Shiva runs into the falling debris to rescue children.",
        visualCue: "Dynamic dust particles flying, shaky-cam slow-motion tracking, high-contrast shadows.",
        soundEffect: "Deafening sound of concrete cracking, rain storm howling, and panic cries."
      },
      {
        sceneNumber: 3,
        title: "The IAS Ascent",
        description: "A fast-paced training montage shown across the rustic village squares and library tables. The scene transitions to Shiva wearing a crisp formal suit, receiving his official collector's badge.",
        visualCue: "Warm amber progress lights transitioning to highly polished, clean administrative office aesthetics.",
        soundEffect: "Uplifting and driving electronic strings rising to a majestic orchestral culmination."
      },
      {
        sceneNumber: 4,
        title: "The Office Confrontation",
        description: "Shiva sits in the spacious office of the District Collector. He refuses to sign a corrupted budget ledger presented by Vikranth's assistants, throwing it to the floor.",
        visualCue: "Low-angle symmetry shot tracking Shiva's uncompromising expression. High contrast sunlight.",
        soundEffect: "Sharp paper rustles and the deep resonance of a heavy wooden desk slam."
      },
      {
        sceneNumber: 5,
        title: "Mission Bharath Triumph",
        description: "Thousands of village schools reconstructed, glowing with lights, libraries, and computers. Shiva stands center, a vast sea of children and parents raising their hands in triumph.",
        visualCue: "Luminous, golden-hour outdoor look, full of joy, color, and inspiring cinematic frames.",
        soundEffect: "An emotional, grand chorus vocal performance and joyful festival bells."
      }
    ]
  },
  {
    id: "rudhiravanam",
    titleTelugu: "రుధిరవనం",
    titleEnglish: "RUDHIRAVANAM",
    taglineTelugu: "ది బ్లడ్ ఫారెస్ట్",
    taglineEnglish: "The Blood Forest - Nature's Technology Unleashed",
    genre: "Emotional Action Drama | Environmental Sci-Tech Thriller",
    poster: rudhiravanamPoster,
    status: "Ready for Production",
    corePlot: "ఇండియాలోనే బిగ్గెస్ట్ కార్పొరేట్ కింగ్ అయిన అభిరామ్, తన తల్లి వసుంధర మరణం వెనుక ఉన్న కుట్రను ఛేదించడానికి ఆమె స్వగ్రామమైన మేఘాలయ అడవులకు (రుధిరవనం) వస్తాడు. అక్కడ ఊరి కింద దాగి ఉన్న వేల కోట్ల విలువైన యురేనియం నిక్షేపాల కోసం అంతర్జాతీయ మాఫియాతో చేతులు కలిపిన రుద్ర అనే నాయకుడిని ఎదుర్కోవడమే ఈ సినిమా కథ.",
    synopsis: "Abhiram is the ultimate tech-mogul and head of India's largest corporate tech conglomerate. Plagued by grief over the mysterious passing of his environmentalist mother, Vasundhara, he leaves his corporate empire to visit her ancestral village deep within the primordial, rain-drenched pine jungles of Meghalaya—referred to by locals as 'Rudhiravanam' (The Blood Forest). There, Abhiram discovers a chilling reality: the village sits directly atop one of the largest uranium reserves in the world. A local warlord named Rudra has signed an international black-market contract with foreign mafias to forcefully clear the forest and extract the mineral. Armed with his modern tech inventions, and supported by Vanaja, a fiery local tribal activist of nature, Abhiram launches a groundbreaking war that pits cutting-edge technology against sheer human-driven greed to save the cradle of nature.",
    directorNotes: "A highly poignant, visual, and action-packed clash between modern technology and ancient nature. Beautiful rain-soaked green landscapes of Meghalaya, mist-shrouded deep river canyons (looking like Avatar's forests), and contrastingly bright, glowing blue uranium mine pits. Explores environmental protection themes with massive scale.",
    budget: "80 - 100 Crores",
    timeline: "15 - 18 Months",
    marketPotential: [
      "High emotional appeal globally due to its powerful Mother sentiment and environmental theme.",
      "Matches the scale and theme of recent ground-breaking pan-Indian blockbusters.",
      "Vast overseas appeal in Europe and US markets due to its top-tier visual effects and ecological awareness."
    ],
    characters: [
      { name: "అభిరామ్ (Abhiram)", desc: "The brilliant tech-tycoon who deploys his advanced micro-drones and cyber inventions to save his mother's native forest land.", actorSuggest: "Main Lead" },
      { name: "వనజ (Vanaja)", desc: "A fierce, athletic indigenous tribal protector who represents the traditional spirit, archery, and wisdom of the forest.", actorSuggest: "Female Lead" },
      { name: "వసుంధర (Vasundhara)", desc: "Abhiram's inspiring late mother whose lifetime files on ecological preservation reveal the uranium conspiracy.", actorSuggest: "Protagonist Mother" },
      { name: "రుద్ర (Rudra)", desc: "The powerful tribal-turned-mafia leader who seeks absolute extraction wealth at any cost.", actorSuggest: "Main Antagonist" },
      { name: "బుచ్చిబాబు (Buchi Babu)", desc: "A humorous but loyal forest officer who provides valuable local assistance and comic relief in Abhiram's operations.", actorSuggest: "Supporting Cast" }
    ],
    locations: [
      "Prime rain forests and living root bridges of Meghalaya",
      "Vast high-stakes corporate suites in Las Vegas and London",
      "Varanasi deep river banks & Rajasthan desert copper mines",
      "Volumetric, deep-earth turquoise green uranium vaults"
    ],
    vfxHighlights: [
      { title: "డ్రోన్ వార్ సీక్వెన్స్ (The Drone Swarm)", desc: "An outstanding action scene where Abhiram's hundreds of sleek, glowing insect-sized micro-drones coordinate to blind and disarm Rudra's heavy military machinery." },
      { title: "బ్లూ ఎనర్జీ హోలోగ్రామ్స్ (Subterranean Uranium Scans)", desc: "Stunning visual mapping depicting the blue radioactive energy pulses of uranium deposits sleeping deep within the roots of old forest trees." },
      { title: "పంచజాత్య పోటీలు (The Five Elements Tournament)", desc: "A majestic, heavily stylized ancient competition showcasing high-speed traditional archery, horse chase, and raw wrestling." }
    ],
    storyboard: [
      {
        sceneNumber: 1,
        title: "The Golden boardroom",
        description: "Abhiram stands in an elegant glass boardroom overlooking London city, analyzing an encrypted video message from his late mother as shadows of mist sweep the window.",
        visualCue: "Sleek slate-gray skyscrapers, gold table reflections, and glowing blue tablet lights.",
        soundEffect: "Muted city sounds, corporate electronic key tones, and a soft dramatic string melody."
      },
      {
        sceneNumber: 2,
        title: "Into the Blood Forest",
        description: "An old jeep drives through a massive, breathtaking rain-drenched valley of Meghalaya. Heavy fog hangs over towering green pine canopies.",
        visualCue: "High-contrast emerald-green colors, misty white horizons, and beautiful liquid water reflections.",
        soundEffect: "The deep rumble of a distant waterfall, thunder and the tires roll on wet mud."
      },
      {
        sceneNumber: 3,
        title: "Uranium Mapping",
        description: "Abhiram launches a sleek personal drone. The controller projects a highly-detailed blue holographic map showing glowing radioactive veins deep within the tree roots.",
        visualCue: "The entire screen shifts to a digital neon blue geological scanner look, highlighting natural structures.",
        soundEffect: "The elegant buzz of microscopic rotors and soft sonar ping sounds."
      },
      {
        sceneNumber: 4,
        title: "The Forest Battle",
        description: "Rudra's massive excavator units enter the jungle. Vanaja leads a line of tribal warriors weaponized with traditional burning bows, ready to strike.",
        visualCue: "Low-angle dramatic lighting, dark orange fire flare matches against the deep pine forest shadows.",
        soundEffect: "Heavy diesel engine roars, tribal war horns, and arrow releases."
      },
      {
        sceneNumber: 5,
        title: "The Climax Shield",
        description: "Abhiram activates an array of eco-technological drones. Together, they weave an electromagnetic net that captures and deactivates the extraction weapons, saving the sacred forest.",
        visualCue: "Hundreds of brilliant blue-glowing points uniting into a fluid protective shield over the pristine valley canopy.",
        soundEffect: "Uplifting forest birds chirping, synthetic energy rising, and a majestic cinematic orchestral climax."
      }
    ]
  }
];

