import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductsRpository {
  constructor(private readonly Prisma: PrismaService){
  }

  create(createProductDto: CreateProductDto) {
    return this.Prisma.products.create({
      data: createProductDto
    });
  }
  
  findAll() {
    return this.Prisma.products.findMany({
      orderBy: {
        createdAt: "asc"
      }
    });
  }
  
  findOne(id: number) {
    return this.Prisma.products.findUnique({
      where: {
        id: id
      }
    });
  }
  
  update(id: number, updateProductDto: UpdateProductDto) {
    return this.Prisma.products.update({
      where:{
        id: id
      },
      data: updateProductDto
    });
  }
  
  delete(id: number) {
    return this.Prisma.products.delete({
      where: {
        id: id
      }
    });
  } 
}