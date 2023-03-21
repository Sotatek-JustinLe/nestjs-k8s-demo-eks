import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsoleModule } from 'nestjs-console';
import { TestConsole } from 'src/test.console';

@Module({
  imports: [ConsoleModule],
  controllers: [AppController],
  providers: [AppService, TestConsole],
})
export class AppModule {}
