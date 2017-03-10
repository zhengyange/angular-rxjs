import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysStoreComponent } from './sys-store.component';
import { SliderComponent } from './slider/slider.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SysStoreComponent,
    SliderComponent,
    ContentComponent
  ]
})
export class SysStoreModule { }
