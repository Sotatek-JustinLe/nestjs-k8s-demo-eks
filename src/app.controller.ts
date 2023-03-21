/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api')
  api(): string {
    return this.appService.api();
  }
  @Get('/test')
  test(): string {
    return this.appService.test();
  }
}
