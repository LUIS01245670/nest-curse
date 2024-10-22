import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
   whitelist:true
  }))// elmina los datos no correpondientes traidos desde el front por ejemplo un dato no correspondiente a el establecido en mis formularios

  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, documentFactory);
  app.enableCors();//para que se pueda dar la  comunicaion entre diferentes dominios con origin {origin:http://} establesemos que dominio puedo estraer datos de este backend
  await app.listen(3000);
}
bootstrap();
