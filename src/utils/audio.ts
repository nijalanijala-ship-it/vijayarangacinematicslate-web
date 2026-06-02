// Web Audio cinematic synthesizer for blockbuster sfx & atmospheric cues
class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private masterVolume: GainNode | null = null;
  private isMuted: boolean = false;

  constructor() {
    // Audio Context is initialized lazily on user interaction
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.masterVolume = this.ctx.createGain();
        this.masterVolume.gain.setValueAtTime(0.3, this.ctx.currentTime); // default comfortable volume
        this.masterVolume.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.masterVolume && this.ctx) {
      this.masterVolume.gain.setValueAtTime(muted ? 0 : 0.4, this.ctx.currentTime);
    }
  }

  public playDeepImpact() {
    this.initCtx();
    if (this.isMuted || !this.ctx || !this.masterVolume) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(110, this.ctx.currentTime); // low A
    osc.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 1.2); // deep pitch slide

    gain.gain.setValueAtTime(0.8, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 1.8);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterVolume);

    osc.start();
    osc.stop(this.ctx.currentTime + 2.0);
  }

  public playSuspenseRiser(durationSec: number = 2.5) {
    this.initCtx();
    if (this.isMuted || !this.ctx || !this.masterVolume) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = "triangle";
    osc2.type = "sawtooth";

    osc1.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + durationSec);

    osc2.frequency.setValueAtTime(152, this.ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(884, this.ctx.currentTime + durationSec);

    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + durationSec * 0.8);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + durationSec);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(200, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1800, this.ctx.currentTime + durationSec * 0.9);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterVolume);

    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + durationSec);
    osc2.stop(this.ctx.currentTime + durationSec);
  }

  public playActionPulse() {
    this.initCtx();
    if (this.isMuted || !this.ctx || !this.masterVolume) return;

    // Fast-paced techno-blockbuster synth burst
    const now = this.ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const time = now + i * 0.25;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "square";
      osc.frequency.setValueAtTime(i % 2 === 0 ? 110 : 165, time);
      
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.linearRampToValueAtTime(0.05, time + 0.15);
      gain.gain.setValueAtTime(0.01, time + 0.23);
      
      osc.connect(gain);
      gain.connect(this.masterVolume);
      
      osc.start(time);
      osc.stop(time + 0.24);
    }
  }

  public playClimaxExplosion() {
    this.initCtx();
    if (this.isMuted || !this.ctx || !this.masterVolume) return;

    const osc = this.ctx.createOscillator();
    const noiseNode = this.ctx.createBufferSource();
    const noiseGain = this.ctx.createGain();
    const oscGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Setup Noise for rustling fire explosion sound
    const bufferSize = this.ctx.sampleRate * 2; // 2 seconds
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noiseNode.buffer = buffer;

    // Sub synth impact
    osc.type = "sine";
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.8);

    oscGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
    oscGain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 1.5);

    noiseGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.8);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(500, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 1.4);

    noiseNode.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterVolume);

    osc.connect(oscGain);
    oscGain.connect(this.masterVolume);

    osc.start();
    osc.stop(this.ctx.currentTime + 1.6);
    noiseNode.start();
    noiseNode.stop(this.ctx.currentTime + 2.0);
  }

  public playGoldenResolution() {
    this.initCtx();
    if (this.isMuted || !this.ctx || !this.masterVolume) return;

    // A rich gold major 7th chord (G-B-D-F#) with resonance
    const frequencies = [196.00, 246.94, 293.66, 369.99]; // luxurious Gmaj7
    const now = this.ctx.currentTime;

    frequencies.forEach((freq, index) => {
      if (!this.ctx || !this.masterVolume) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + index * 0.08); // slightly staggered
      
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);
      
      osc.connect(gain);
      gain.connect(this.masterVolume);
      
      osc.start(now);
      osc.stop(now + 3.0);
    });
  }

  public playTickingClock(durationSec: number = 3.0) {
    this.initCtx();
    if (this.isMuted || !this.ctx || !this.masterVolume) return;

    const now = this.ctx.currentTime;
    // Tick-tock metronome rhythm
    for (let i = 0; i < durationSec; i++) {
      const time = now + i * 1.0;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(i % 2 === 0 ? 1200 : 1000, time);
      
      gain.gain.setValueAtTime(0.15, time);
      gain.gain.linearRampToValueAtTime(0.01, time + 0.05);
      
      osc.connect(gain);
      gain.connect(this.masterVolume);
      
      osc.start(time);
      osc.stop(time + 0.07);
    }
  }
}

export const audioSynth = new CinematicAudioEngine();
