import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePulsoPage } from './detalle-pulso.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePulsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePulsoPageRoutingModule {}
