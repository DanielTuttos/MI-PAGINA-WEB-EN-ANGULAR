import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  servicios: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarServicios();
  }

  private cargarInfo() {
    //lee archivo json
    this.http.get('https://danielromeroag.firebaseio.com/data-pagina.json')
      .subscribe(resp => {
        this.cargada = true;
        this.info = resp;
        //console.log(this.info);
      });

  }

  private cargarServicios() {
    this.http.get('https://danielromeroag.firebaseio.com/servicios.json')
      .subscribe((data: any) => {
        this.servicios = data;
        //console.log(this.servicios);
      })
  }

}
