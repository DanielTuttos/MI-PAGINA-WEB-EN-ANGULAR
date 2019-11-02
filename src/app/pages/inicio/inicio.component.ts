import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public servicio: InfoPaginaService, public portafolios: PortafolioService) { }

  ngOnInit() {
  }

}
