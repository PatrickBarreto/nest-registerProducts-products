import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductsRpository {
  constructor(private readonly Prisma: PrismaService){
  }

  async create(createProductDto: CreateProductDto) {
    return await this.Prisma.products.create({
      data: createProductDto
    });
  }
  
  async findAll() {
    return await this.Prisma.products.findMany({
      orderBy: {
        createdAt: "asc"
      }
    });
  }
  
  async findOne(id: number) {
    return await this.Prisma.products.findUnique({
      where: {
        id: id
      }
    });
  }
  
  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.Prisma.products.update({
      where:{
        id: id
      },
      data: updateProductDto
    });
  }
  
  async delete(id: number) {
    return await this.Prisma.products.delete({
      where: {
        id: id
      }
    });
  } 
}