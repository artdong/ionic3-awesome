import { Injectable, NgZone } from '@angular/core';
import { Engine, Scene } from 'babylonjs';

/*
  Class for the BabylonjsProvider provider.
*/
@Injectable()
export class BabylonProvider {
  private _engine: Engine;
  private _uid: number;

  constructor(private zone: NgZone) {
    if (!this._uid) {
      this._uid = Math.floor(Date.now() / 1);
    }
  }

  public createEngine(canvas: HTMLCanvasElement): Engine {
    this._engine = new Engine(canvas);

    // the canvas/window resize event handler
    window.addEventListener('resize', () => {
      this._engine.resize();
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

    });

    return this._engine;
  }

  public getEngine(): Engine {
    return this._engine;
  }

  public getUID(): number {
    return this._uid;
  }

  public start(scene: Scene): void {
    this.zone.runOutsideAngular(() => {
      this._engine.runRenderLoop(() => {
        scene.render();
      });
    });
  }

  public stop(): void {

  }

  public addScene(scene: Scene): void {

  }
}
