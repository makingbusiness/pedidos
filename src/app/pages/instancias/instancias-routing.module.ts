import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstanciasPage } from './instancias.page';

const routes: Routes = [
  {
    path: '',
    component: InstanciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstanciasPageRoutingModule {}
