import { Injectable } from '@nestjs/common';
import { Command, Console } from 'nestjs-console';

@Console()
@Injectable()
export class TestConsole {
  @Command({
    command: 'test',
    description: 'test',
  })
  test(): void {
    console.log('Hello world');
  }
}
