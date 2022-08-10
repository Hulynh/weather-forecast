import { Get, Controller, Post, Body, Param, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { LangEnum } from './enums/lang-enum';
import { ModeRole } from './enums/mode-enum';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

 
  @Get(':city')
  @ApiQuery({ name: 'mode', enum: ModeRole })
  @ApiQuery({ name: 'lang', enum: LangEnum })
  async root(@Param('city') city:string,@Query('mode') mode:ModeRole=ModeRole.JSON,@Query('lang') lang:LangEnum=LangEnum.en  ): Promise<object> {

    return  await this.weatherService.ofCity(city,mode,lang);
    
  }
}