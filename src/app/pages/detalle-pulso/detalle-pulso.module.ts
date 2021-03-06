import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePulsoPageRoutingModule } from './detalle-pulso-routing.module';

import { DetallePulsoPage } from './detalle-pulso.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePulsoPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [DetallePulsoPage]
})
export class DetallePulsoPageModule {}
