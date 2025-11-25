import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AqiService {
  private BASE_URL = 'http://localhost:8080/api/aqi/';

  async getAqi(city: string): Promise<any> {
    const response = await axios.get(this.BASE_URL + city);
    return response.data;
  }
}
