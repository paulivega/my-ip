import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'IP';
  ip: string = '';

  constructor(
    private readonly http: HttpClient
    
  ){}

  getMyIP = () => {
    console.log('MyIP')
    this.http.get<any>('http://ip-api.com/json/').subscribe((datos) => {
      this.ip = datos.query
      console.log(datos)
    });
  }
}
