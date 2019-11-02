import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-detalle-portafolio',
  templateUrl: './detalle-portafolio.component.html',
  styleUrls: ['./detalle-portafolio.component.css']
})
export class DetallePortafolioComponent implements OnInit {

  portafolio: any = {};
  id: string;

  constructor(private route: ActivatedRoute, public portafolioService: PortafolioService) { }

  ngOnInit() {
    this.route.params.subscribe(parametro => {
      //console.log(parametro.id);
      this.portafolioService.getPortafolio(parametro.id)
        .subscribe((portafolio: any) => {
          //console.log(portafolio);
          this.portafolio = portafolio;
        })

    })
  }

}
