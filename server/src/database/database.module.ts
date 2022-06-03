import { Global, Module } from '@nestjs/common';
import dynamo from './setup';

@Global()
@Module({
  providers: [
    {
      provide: 'DYNAMO',
      useFactory: dynamo,
    },
  ],
  exports: ['DYNAMO'],
})
export class DatabaseModule {}
