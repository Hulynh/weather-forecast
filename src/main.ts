import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('WeatherForecast')
  .setDescription('Weather forecasting is the application of science and technology to predict the conditions of the atmosphere for a given location and time')
  .setVersion('1.0')
  .addTag('Location')
  .build();
const document = SwaggerModule.createDocument(app, config,{
  include :[AppModule],
});
SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
