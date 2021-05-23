import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public publicaciones: any;
  constructor(private http: HttpService) {
    this.getBoletines();
  }
  getBoletines() {
    this.http.get(environment.http.getAll)
      .subscribe((res: any) => {
        console.log("BOLETINES", res)
        this.publicaciones = res.map(item => {
          if (item !== null || item !== undefined || item!=="null") {
            return item;
          }
        });
        console.log("BOLETINES DESPUES", this.publicaciones)
      }, err => {
        alert("ERROR" + err);
      });
  }
}
