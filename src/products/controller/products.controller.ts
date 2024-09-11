import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @HttpCode(201)
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }
  
  @HttpCode(200)
  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }
  
  @HttpCode(200)
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return await this.productsService.findOne(id);
  }

  @HttpCode(200)
  @Patch(':id')
  async update(@Param('id', new ParseIntPipe()) id: number, @Body() updateProductDto: UpdateProductDto) {
    return await this.productsService.update(id, updateProductDto);
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(@Param('id', new ParseIntPipe()) id: number) {
    return await this.productsService.remove(id);
  }
}
