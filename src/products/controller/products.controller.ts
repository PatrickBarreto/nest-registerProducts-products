import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, NotFoundException } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @HttpCode(201)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  
  @HttpCode(200)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
    
  @HttpCode(200)
  @Get('/byCategoryID/:categoryId')
  async findAllByCategoryId(@Param('categoryId', new ParseIntPipe()) categoryId: number) {
    return await this.productsService.findAllByCategoryId(categoryId);
  }
  
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.productsService.findOne(id);
  }

  @HttpCode(200)
  @Patch(':id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.productsService.remove(id);
  }
}
