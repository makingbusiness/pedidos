import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulsosPageRoutingModule } from './pulsos-routing.module';

import { PulsosPage } from './pulsos.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulsosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PulsosPage],
  providers: []
})
export class PulsosPageModule {}
