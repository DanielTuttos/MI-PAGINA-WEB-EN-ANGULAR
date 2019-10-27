import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioModule'
  },
  {
    path: 'acerca', loadChildren: './pages/acerca/acerca.module#AcercaModule'
  },
  {
    path: 'servicios', loadChildren: './pages/servicios/servicios.module#ServiciosModule'
  },
  {
    path: 'portafolio', loadChildren: './pages/portafolio/portafolio.module#PortafolioModule'
  },
  {
    path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoModule'
  },
  {
    path: '**', redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
