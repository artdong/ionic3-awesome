import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import BABYLON from 'babylonjs';
import { BabylonProvider, BabylonConfigProvider } from './../../providers/providers';
import HemisphericLight = BABYLON.HemisphericLight;
import ArcRotateCamera = BABYLON.ArcRotateCamera;
import Scene = BABYLON.Scene;
import Vector3 = BABYLON.Vector3;
import VertexData = BABYLON.VertexData;
import StandardMaterial = BABYLON.StandardMaterial;
import Color3 = BABYLON.Color3;
import Texture = BABYLON.Texture;
import MeshBuilder = BABYLON.MeshBuilder;
import PhysicsImpostor = BABYLON.PhysicsImpostor;

@IonicPage({name: 'page-babylon'})
@Component({
  selector: 'page-babylon',
  templateUrl: 'babylon.html'
})
export class BabylonPage {
  firstDie: any;
  ground: any;
  secondDie: any;
  @ViewChild('surface') surface: ElementRef;

  private _scene: Scene;
  private _camera: ArcRotateCamera;
  private _lightOne: HemisphericLight;
  private _lightTwo: HemisphericLight;

  constructor(private navCtrl: NavController, private babylonProvider: BabylonProvider, private babylonConfig: BabylonConfigProvider) {

  }

  ionViewDidLoad() {
    this.babylonProvider.createEngine(this.surface.nativeElement);
    this.surface.nativeElement.width = window.innerWidth;
    this.surface.nativeElement.height = window.innerHeight;
    this.surface.nativeElement.style.width = '100%';
    this.surface.nativeElement.style.height = '100%';
    this.createScene();
    this.animate();
  }

  ionViewWillEnter() {
    if (this.babylonConfig.hasChanged) { // has anything changed?
      // then reset uv settings for both dice
      let options = {
        size: 1.25,
        faceUV: this.babylonConfig.getFaceUV(this.babylonConfig.colorOne),
        updatable: false
      };
      // MeshBuilder.UpdateBoxOptions(this.firstDie, options);
      let vertexData = VertexData.CreateBox(options);
      vertexData.applyToMesh(this.firstDie, options.updatable);

      options = {
        size: 1.25,
        faceUV: this.babylonConfig.getFaceUV(this.babylonConfig.colorTwo),
        updatable: false
      };
      // MeshBuilder.UpdateBoxOptions(this.secondDie, options);
      vertexData = VertexData.CreateBox(options);
      vertexData.applyToMesh(this.secondDie, options.updatable);
    }
  }

  createScene(): void {
    // create a basic BJS Scene object
    this._scene = new Scene(this.babylonProvider.getEngine());
    this._scene.enablePhysics(); // use physics!!
    // create an ArcRotateCamera
    // attach the camera to the canvas
    this._camera = new ArcRotateCamera('ArcRotateCamera', 0, 0, 0, Vector3.Zero(), this._scene);
    this._camera.setPosition(new Vector3(0, 15, 1));
    // this._camera.attachControl(this.surface.nativeElement, false);
    // create two  basic light, aiming 0,1,0 - meaning, to the sky
    this._lightOne = new HemisphericLight('light1', new Vector3(1, 0, 0), this._scene);
    this._lightTwo = new HemisphericLight('light1', new Vector3(0, 1, -1), this._scene);
    this._lightOne.intensity = 0.6;
    this._lightTwo.intensity = 0.3;

    // materials and textures
    let green = new StandardMaterial('green', this._scene);
    green.diffuseColor = new Color3(0, 0.7, 0);

    let texture = new Texture('assets/images/die.svg', this._scene);

    // create a built-in "ground" shape and walls
    this.ground = MeshBuilder.CreateGround('ground1', {width: 6, height: 1.618 * 6, subdivisions: 2}, this._scene);
    this.ground.material = green;
    let physOptions = {mass: 0, restitution: 0.01, friction: 0.5};
    this.ground.physicsImpostor = new PhysicsImpostor(this.ground, PhysicsImpostor.PlaneImpostor, physOptions, this._scene);
    let walls = [];
    for (let i = 0; i < 4; i++) {
      walls[i] = MeshBuilder.CreateBox('wall_' + i, {depth: 0.1, width: 6, height: 32}, this._scene);
      walls[i].rotation.y = i * Math.PI / 2;
      walls[i].position.y = 3;
      walls[i].material = green;
      if ((i == 1) || (i == 3)) {
        walls[i].scaling.x = 1.618;
      }
      walls[i].physicsImpostor = new PhysicsImpostor(walls[i], PhysicsImpostor.BoxImpostor, {mass: 0}, this._scene);
    }
    walls[0].position.z = 3 * 1.618;
    walls[2].position.z = -3 * 1.618;
    walls[1].position.x = 3;
    walls[3].position.x = -3;

    // create dice
    let faceUV = this.babylonConfig.getFaceUV(this.babylonConfig.colorOne);
    let options = {
      size: 1.25,
      faceUV,
    };
    physOptions = {mass: 0.25, restitution: 0.1, friction: 0.1}; // initialise physics
    this.firstDie = MeshBuilder.CreateBox('firstDie', options, this._scene);
    this.firstDie.physicsImpostor = new PhysicsImpostor(this.firstDie, PhysicsImpostor.BoxImpostor, physOptions, this._scene);
    let firstDieMaterial = new StandardMaterial('firstDieMat', this._scene);
    this.firstDie.material = firstDieMaterial;
    firstDieMaterial.diffuseTexture = texture;

    faceUV = this.babylonConfig.getFaceUV(this.babylonConfig.colorTwo);
    options = {
      size: 1.25,
      faceUV,
    };
    this.secondDie = MeshBuilder.CreateBox('secondDie', options, this._scene);
    this.secondDie.physicsImpostor = new PhysicsImpostor(this.secondDie, PhysicsImpostor.BoxImpostor, physOptions, this._scene);
    let secondDieMaterial = new StandardMaterial('secondDieMat', this._scene);
    this.secondDie.material = secondDieMaterial;
    secondDieMaterial.diffuseTexture = texture;

    // set a random impulse for both dice
    this.rollEm(null);
  }

  animate(): void {
    // run the render loop
    this.babylonProvider.start(this._scene);
  }

  rollEm(event): void {
    // roll the dice!
    this.firstDie.position = new Vector3(-0.5, 1.5 + Math.random(), 2.5);
    this.secondDie.position = new Vector3(0.5, 1.5 + Math.random(), 2.5);
    let randomVector = new Vector3((0.49 - Math.random()), -0.1, -1 + (-Math.random()));
    this.firstDie.physicsImpostor.applyImpulse(randomVector, this.firstDie.position);
    this.secondDie.physicsImpostor.applyImpulse(randomVector, this.secondDie.position);
  }

  settings(event): void {
    this.navCtrl.push('page-babylon-config');
  }
}
