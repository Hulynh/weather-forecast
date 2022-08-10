import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class WeatherService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      params: {
        APPID: 'c12bdbbf56bfc35592a66988f9acd4a1',
      },
    });
  }

  async ofCity(city: string): Promise<object> {
    const response = await this.client.get('weather', {
      params: { q: city },
    });
    return response.data;
  }
}