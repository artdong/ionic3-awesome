import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  appCode = 'APPCODE fa09ada4e7e94722953f2ca87d075fe6';
  url = 'http://jisutqybmf.market.alicloudapi.com/weather/query';
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(city) {
    return this.http.get(this.url, {
      headers: new HttpHeaders().set('Authorization', this.appCode),
      params: {'city': city}
    })
  }
}
