import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAmountDto } from './dto/create-amount.dto';
import { UpdateAmountDto } from './dto/update-amount.dto';
import { Amount } from './entities/amount.entity'
import { AmountTransformer } from './amount.transformer'


@Injectable()
export class AmountsService {
  constructor(@InjectModel('Amounts') private AmountModel: Model<Amount>) {}

  async create(createAmountDto: CreateAmountDto): Promise<AmountTransformer> {
    let data = new this.AmountModel(createAmountDto)
    return AmountTransformer.singleTransform(await data.save());
  }

  async findAll() {
    return this.AmountModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} amount`;
  }

  update(id: number, updateAmountDto: UpdateAmountDto) {
    return `This action updates a #${id} amount`;
  }

  remove(id: number) {
    return `This action removes a #${id} amount`;
  }
}
