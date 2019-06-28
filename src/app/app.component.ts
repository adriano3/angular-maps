import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}
)
export class AppComponent {
  texto :  string ='Cuidad de Cochabamba';
  lat:number=-17.414;
  lng:number=-66.1653;
  zoom: number = 15;
}
