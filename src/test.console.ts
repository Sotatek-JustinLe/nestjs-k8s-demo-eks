import { Injectable } from '@nestjs/common';
import { Command, Console } from 'nestjs-console';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@Console()
@Injectable()
export class TestConsole {
  @Command({
    command: 'test',
    description: 'test',
  })
  async test(): Promise<void> {
    while (true) {
      console.log('Hello world');
      await sleep(3000);
    }
  }
}
