import { Module } from '@nestjs/common';
import { AmountsService } from './amounts.service';
import { AmountsController } from './amounts.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { AmountSchema } from 'src/schemas/amount.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Amounts', schema: AmountSchema }])],
  controllers: [AmountsController],
  providers: [AmountsService]
})
export class AmountsModule {}
