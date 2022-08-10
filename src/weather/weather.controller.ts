import { Get, Controller, Post, Body, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  async root(@Param('city') city:string): Promise<object> {
    return  await this.weatherService.ofCity(city);
    
  }
}