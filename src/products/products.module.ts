import { Module } from '@nestjs/common';
import { ProductsService } from './service/products.service';
import { ProductsController } from './controller/products.controller';
import { ProductsRpository } from './repository/products.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRpository],
})
export class ProductsModule {}
