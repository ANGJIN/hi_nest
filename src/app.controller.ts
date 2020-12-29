import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller는 url-function 간의 mapping만을 담당하도록 한다

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Controller내의 getHello()함수와 같은 이름으로 Service내에 getHello()함수를 만드는것이 convention이긴 하나 필수적이진 않다.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Business logic은 service가 담당하도록 구성하자
  @Get('hello')
  sayHello(): string {
    return 'saying hell o';
  }
}
