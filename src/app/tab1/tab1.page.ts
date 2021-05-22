import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private loadingController: LoadingController) { }
  async consultar() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 3000
    })
    await loading.present();
  }
}
