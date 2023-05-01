/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform:true ,
      whitelist:true,
      forbidNonWhitelisted:true // lancar erro se alguem mandar um dado fora do DTO
    })
  )
    useContainer(app.select(AppModule),{ fallbackOnErrors:true});  // faz com que o classValidator acesses as dependencias do projeto **importante
  await app.listen(3000);
}
bootstrap();
