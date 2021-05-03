import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ImagenPulsoPipe } from './imagen-pulso.pipe';
import { RedondeoPipe } from './redondeo.pipe';
import { ImgProductoPipe } from './img-producto.pipe';

@NgModule({
  declarations: [ImagenPipe, ImagenPulsoPipe, RedondeoPipe, ImgProductoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImagenPipe,
    ImagenPulsoPipe,
    ImgProductoPipe,
    RedondeoPipe
  ]
})
export class PipesModule { }
