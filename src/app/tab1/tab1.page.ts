import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public item: any;
  public state = false;
  public data: any;
  constructor(private loadingController: LoadingController, private http: HttpService) { }
  async consultar() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 3000
    })
    await loading.present();
    this.http.getC(environment.http.consulta, this.data)
      .subscribe(res => {
        this.state = true;
        console.log("CONSULTA", res)
        this.item = res;
      }, err => {
        console.log("ERROR" + err)
      })
  }
}
