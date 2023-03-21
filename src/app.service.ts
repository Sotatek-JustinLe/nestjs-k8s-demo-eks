import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  api(): any {
    return {
      key: 'Hello World',
    };
  }
  test(): any {
    return {
      key: process.env.DATA,
    };
  }
}
