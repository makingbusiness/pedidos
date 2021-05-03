import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulsosPage } from './pulsos.page';

const routes: Routes = [
  {
    path: '',
    component: PulsosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulsosPageRoutingModule {}
