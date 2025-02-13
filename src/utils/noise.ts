export class Noise {
  private perm: number[] = new Array(512);

  constructor(seed = Math.random()) {
    const random = this.seededRandom(seed);
    for (let i = 0; i < 256; i++) {
      this.perm[i] = i;
    }

    for (let i = 255; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [this.perm[i], this.perm[j]] = [this.perm[j], this.perm[i]];
    }

    for (let i = 0; i < 256; i++) {
      this.perm[i + 256] = this.perm[i];
    }
  }

  private seededRandom(seed: number) {
    return () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
  }

  public noise(x: number, y: number, z: number): number {
    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (t: number, a: number, b: number) => a + t * (b - a);
    
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = fade(x);
    const v = fade(y);
    const w = fade(z);

    const A = this.perm[X] + Y;
    const AA = this.perm[A] + Z;
    const AB = this.perm[A + 1] + Z;
    const B = this.perm[X + 1] + Y;
    const BA = this.perm[B] + Z;
    const BB = this.perm[B + 1] + Z;

    return lerp(w, 
      lerp(v, 
        lerp(u, this.grad(this.perm[AA], x, y, z),
          this.grad(this.perm[BA], x-1, y, z)),
        lerp(u, this.grad(this.perm[AB], x, y-1, z),
          this.grad(this.perm[BB], x-1, y-1, z))),
      lerp(v, 
        lerp(u, this.grad(this.perm[AA+1], x, y, z-1),
          this.grad(this.perm[BA+1], x-1, y, z-1)),
        lerp(u, this.grad(this.perm[AB+1], x, y-1, z-1),
          this.grad(this.perm[BB+1], x-1, y-1, z-1))));
  }

  private grad(hash: number, x: number, y: number, z: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }
}
