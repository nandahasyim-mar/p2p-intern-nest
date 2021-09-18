import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AmountsService } from './amounts.service';
import { CreateAmountDto } from './dto/create-amount.dto';
import { UpdateAmountDto } from './dto/update-amount.dto';
import { AppResponse } from 'src/response.base'

@Controller('amounts')
export class AmountsController {
  constructor(private readonly amountsService: AmountsService) {}

  @Post()
  async create(@Res() res, @Body() createAmountDto: CreateAmountDto) {
    try {
      let data = await this.amountsService.create(createAmountDto)
      return AppResponse.ok(res, data, "Success top Up!")
    } catch (error) {
      return AppResponse.badRequest(res, "", error.message)
    }
  }

  @Get()
  findAll() {
    return this.amountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmountDto: UpdateAmountDto) {
    return this.amountsService.update(+id, updateAmountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amountsService.remove(+id);
  }
}
