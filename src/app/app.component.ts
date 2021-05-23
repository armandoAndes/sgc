import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let publicaciones = [
      {
        image: '../../assets/madison.jpg',
        subtitle: new Date().toDateString(),
        title: 'Madison, WI',
        magnitud: '2.1 M',
        profundidad: '66 km',
        localizacion: 'Latitud: 1, Longitud -1',
        content: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
      },
      {
        image: '../../assets/madison.jpg',
        subtitle: new Date().toDateString(),
        title: 'Madison, WI',
        magnitud: '2.1 M',
        profundidad: '66 km',
        localizacion: 'Latitud: 1, Longitud -1',
        content: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
      },
      {
        image: '../../assets/madison.jpg',
        subtitle: new Date().toDateString(),
        title: 'Madison, WI',
        magnitud: '2.1 M',
        profundidad: '66 km',
        localizacion: 'Latitud: 1, Longitud -1',
        content: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
      },
      {
        image: '../../assets/madison.jpg',
        subtitle: new Date().toDateString(),
        title: 'Madison, WI',
        magnitud: '2.1 M',
        profundidad: '66 km',
        localizacion: 'Latitud: 1, Longitud -1',
        content: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
      },
      {
        image: '../../assets/madison.jpg',
        subtitle: new Date().toDateString(),
        title: 'Madison, WI',
        magnitud: '2.1 M',
        profundidad: '66 km',
        localizacion: 'Latitud: 1, Longitud -1',
        content: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
      },
    ]
    localStorage.setItem('publicaciones', JSON.stringify(publicaciones))
  }
}
