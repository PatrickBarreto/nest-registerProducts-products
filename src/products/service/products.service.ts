import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsRpository } from '../repository/products.repository'; 

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductsRpository){
  }

  async create(createProductDto: CreateProductDto) {
    return await this.repository.create(createProductDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findAllByCategoryId(categoryID: number) {
    return await this.repository.findAllByCategoryId(categoryID);
  }
  
  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.repository.update(id, updateProductDto);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
