import { Injectable } from '@nestjs/common';


// 실제 Business logic이 실행되는 곳. controller에서 호출하여 실행한다.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
}
