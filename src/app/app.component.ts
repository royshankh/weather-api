import { Component } from '@angular/core';
import { DataService } from './services/weather-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wData: any = null;
  city: string;
  wService: DataService;
  constructor(wService: DataService) {
    this.wService = wService;
  }

  getWeatherData(city: string) {
    this.wService.getWeatherData(city).subscribe(resp => {
      this.wData = resp;
    });
  }
}
