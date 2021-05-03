import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/instancias/instancias.module').then( m => m.InstanciasPageModule)
  },
  {
    path: '',
    redirectTo: 'instancias',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'productos/:id',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },  
  {
    path: 'productos/:cat/:id',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },  

  {
    path: 'instancias',
    loadChildren: () => import('./pages/instancias/instancias.module').then( m => m.InstanciasPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./pages/carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'pulsos',
    loadChildren: () => import('./pages/pulsos/pulsos.module').then( m => m.PulsosPageModule)
  },
  {
    path: 'pulsos/:id',
    loadChildren: () => import('./pages/pulsos/pulsos.module').then( m => m.PulsosPageModule)
  },
  {
    path: 'pulsos/:id/:id',
    loadChildren: () => import('./pages/detalle-pulso/detalle-pulso.module').then( m => m.DetallePulsoPageModule)
  },   
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'usuario/:tipo',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },  
  {
    path: 'resumen',
    loadChildren: () => import('./pages/resumen/resumen.module').then( m => m.ResumenPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
