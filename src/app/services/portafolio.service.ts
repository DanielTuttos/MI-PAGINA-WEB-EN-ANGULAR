import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  portafolio: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarPortafolio();
  }

  private cargarPortafolio() {
    this.http.get('https://danielromeroag.firebaseio.com/portafolio.json')
      .subscribe((res: any) => {
        //console.log(res);
        this.portafolio = res;
        //console.log(this.portafolio);
      })
  }

  getPortafolio( id: string ) {

    return this.http.get(`https://danielromeroag.firebaseio.com/portafolio/${ id }.json`);

  }
}
