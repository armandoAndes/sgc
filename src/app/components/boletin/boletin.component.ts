import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletin',
  templateUrl: './boletin.component.html',
  styleUrls: ['./boletin.component.scss'],
})
export class BoletinComponent implements OnInit {
  @Input() publicacion: any;
  constructor() { }

  ngOnInit() {}

}
