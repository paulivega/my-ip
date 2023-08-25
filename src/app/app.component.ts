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
    this.http.get<any>('https://api.ipify.org?format=json').subscribe((datos) => {
      this.ip = this.hideSixCharacters(datos.ip);
    });
  }

  hideSixCharacters = (ip: string): string => {
    let sets = ip.split('.');
    const ipHide = sets.map((set, i) => i < 2 ? 'XXX': set).join('.');
    return ipHide
  }
}
