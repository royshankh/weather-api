import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
    }
    getWeatherData(city: string) {
        return this.http.get('http://api.weatherapi.com/v1/current.json?key={{key}}&q=' + city);
    }
}