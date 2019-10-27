import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: "Inicio",
      path: "/inicio"
    },
    {
      name: "Acerca",
      path: "/acerca"
    },
    {
      name: "Servicios",
      path: "/servicios"
    },
    {
      name: "Portafolio",
      path: "/portafolio"
    },
    {
      name: "Contacto",
      path: "/contacto"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
