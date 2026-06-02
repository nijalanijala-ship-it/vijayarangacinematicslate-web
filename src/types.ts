export interface StoryboardScene {
  sceneNumber: number;
  title: string;
  description: string;
  visualCue: string;
  soundEffect: string;
}

export interface CinematicConcept {
  title: string;
  tagline: string;
  logline: string;
  voiceoverTelugu: string;
  voiceoverTranslation: string;
  storyboard: StoryboardScene[];
}

export interface SavedPitch {
  id: string;
  genre: string;
  theme: string;
  concept: CinematicConcept;
  createdAt: string;
}
