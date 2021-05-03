import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstanciasPageRoutingModule } from './instancias-routing.module';

import { InstanciasPage } from './instancias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstanciasPageRoutingModule
  ],
  declarations: [InstanciasPage]
})
export class InstanciasPageModule {}
