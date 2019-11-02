import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetallePortafolioComponent } from './pages/detalle-portafolio/detalle-portafolio.component';


const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'acerca', loadChildren: './pages/acerca/acerca.module#AcercaModule'
  },
  //{
  //  path: 'servicios', loadChildren: './pages/servicios/servicios.module#ServiciosModule'
  //},
  {
    path: 'portafolio', loadChildren: './pages/portafolio/portafolio.module#PortafolioModule'
  },
  {
    path: 'portafolio-detalle/proyecto/:id', component: DetallePortafolioComponent
  },
  {
    path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoModule'
  },
  {
    path: '**', redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
