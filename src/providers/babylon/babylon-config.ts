import { Vector4 } from 'babylonjs';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
/*
  Class for the ConfigProvider provider.
*/
@Injectable()
export class BabylonConfigProvider {
  public colors = [
    {name: 'Red', value: []},
    {name: 'Green', value: []},
    {name: 'Blue', value: []},
    {name: 'Black', value: []},
    {name: 'White', value: []},
    {name: 'Orange', value: []}
  ];
  public colorOne: number = 0;
  public colorTwo: number = 2;
  public hasChanged: boolean = false;
  private faceUV: any[] = [];

  constructor() {
    for (let j = 0; j < 6; j++) {
      this.faceUV.push(new Array<Vector4>(6));
      for (let i = 0; i < 6; i++) {
        this.faceUV[j][i] = new Vector4(i / 6, (6 - j - 1) / 6, (i + 1) / 6, (6 - j) / 6);
      }
      this.colors[j].value = this.faceUV[j];
    }
  }

  getFaceUV(color: number): Vector4[] {
    return this.colors[color].value;
  }
}
