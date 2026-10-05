/**
 * Web Audio API synthesizer for the "Drums of Liberation" (解放のドラム)
 * Produces the signature syncopated heartbeat rhythm (Doom-Dut-Da-Da)
 */

class DrumsAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private tempo = 126; // BPM of liberation
  private volume = 0.4;
  private step = 0;
  private listeners: Set<(step: number, isHit: boolean) => void> = new Set();

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribe(fn: (step: number, isHit: boolean) => void) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify(step: number, isHit: boolean) {
    this.listeners.forEach((fn) => fn(step, isHit));
  }

  // Synthesize a heavy tribal kick/tom drum hit
  private triggerDrum(frequency: number, decay: number, gainVal: number, pitchBend = true) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    if (pitchBend) {
      osc.frequency.setValueAtTime(frequency * 2.2, now);
      osc.frequency.exponentialRampToValueAtTime(frequency, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(28, now + decay);
    } else {
      osc.frequency.setValueAtTime(frequency, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + decay);
    }

    gain.gain.setValueAtTime(this.volume * gainVal, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + decay);

    // Warm low-pass saturation
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + decay + 0.05);
  }

  // Pattern for "Doom Dut Da Da" across 8 sixteenth-notes
  // Steps 0: Heavy Doom, 2: Dut, 4: Da, 5: Da
  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.initCtx();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const sixteenthInterval = (60 / this.tempo / 4) * 1000;
    this.step = 0;

    this.intervalId = window.setInterval(() => {
      const s = this.step % 8;
      let hit = false;

      if (s === 0) {
        // Deep Doom (Primary Heartbeat)
        this.triggerDrum(82, 0.42, 1.0, true);
        hit = true;
      } else if (s === 2) {
        // Dut (Second Heartbeat pulse)
        this.triggerDrum(105, 0.22, 0.65, true);
        hit = true;
      } else if (s === 4) {
        // Da (Liberation slap 1)
        this.triggerDrum(130, 0.18, 0.75, false);
        hit = true;
      } else if (s === 5) {
        // Da (Liberation slap 2)
        this.triggerDrum(145, 0.25, 0.85, false);
        hit = true;
      }

      this.notify(s, hit);
      this.step++;
    }, sixteenthInterval);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.notify(-1, false);
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
  }

  public getIsPlaying() {
    return this.isPlaying;
  }
}

export const drumsAudio = new DrumsAudioEngine();
