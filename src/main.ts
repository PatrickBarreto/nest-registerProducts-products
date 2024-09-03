import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaNotFoundException } from './exception-filters/prisma-not-found.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //Turn on the global valitation pipes to validade with class-validator
  app.useGlobalPipes(new ValidationPipe());

  //Turn global my person prisma exception filter class
  app.useGlobalFilters(new PrismaNotFoundException());

  //Use the Nest ShutDownHoot to die connections with end of runtine application. Prisma use it now in 5.19
  app.enableShutdownHooks;

  //Listen the 3000 port
  await app.listen(3000);
}
bootstrap();
