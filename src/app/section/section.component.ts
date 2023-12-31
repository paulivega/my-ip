import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  title: string = 'IP';
  ip: string = '';

  constructor(
    private readonly http: HttpClient
  ) { }

  getMyIP = () => {
    this.http.get<any>('https://api.ipify.org?format=json').subscribe((datos) => {
      this.ip = this.maskFirstSixNumbers(datos.ip);
    });
  }

  maskFirstSixNumbers = (fullIp: string): string => {
    let sets = fullIp.split('.');
    const ipHide = sets.map((set, i) => i < 2 ? 'XXX' : set).join('.');
    return ipHide
  }
}
