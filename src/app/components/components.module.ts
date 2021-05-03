import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroComponent } from './carro/carro.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CarroComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CarroComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
