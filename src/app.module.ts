import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmountsModule } from './amounts/amounts.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [AmountsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
