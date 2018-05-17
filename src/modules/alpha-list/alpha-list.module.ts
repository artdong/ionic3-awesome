import { NgModule } from '@angular/core';
import { AlphaListComponent } from './alpha-list';
import {AlphaSectionComponent} from './alpha-section';
import {CommonModule} from '@angular/common';
import {AlphaCellComponent} from './alpha-cell';

@NgModule({
  declarations: [
    AlphaListComponent,
    AlphaSectionComponent,
    AlphaCellComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlphaListComponent,
    AlphaSectionComponent,
    AlphaCellComponent
  ]
})
export class AlphaListModule {}
