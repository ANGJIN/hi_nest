import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validationpipe middleware를 사용해 dto에서 data validation을 할 수 있게 하여 서버를 보호
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, /* decorator가 없는 property 를 wipe out */
    forbidNonWhitelisted : true, /* decorator가 없는 property를 포함해 request를 보내면 error 발생시킴 */
    transform : true, /* url parameter등으로부터 받는 data의 type(string)을 실제 서버에서 사용하는 type으로 자동으로 cast */
  }));

  await app.listen(3000);
}
bootstrap();
