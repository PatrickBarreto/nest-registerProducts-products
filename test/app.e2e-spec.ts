import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Test All products.controller routes (e2e)', () => {
  let app: INestApplication;

  const BASE_PATH = '/products/'

  let productCreatedTest : {
                            id:number
                            name: string
                            price: number
                            description?: string
                            image?: string
                            categoryId: number
                            createdAt: string
                            updatedAt: string
                          };

  let name = "teste";
  let price = 100;
  let description = "teste Description";
  let image = "teste image path";
  let categoryId = 1;

  let editedName = "Teste 2"

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create a new product (POST)', () => {
    const result = request(app.getHttpServer())
      .post(BASE_PATH)
      .send({
        name: name,
        price: price,
        description: description,
        image: image,
        categoryId: categoryId
      })
      .expect(201)
      .expect((res)=>{
        productCreatedTest = res.body
      })

      return result;
      
  });
  it('Return all products (GET)', () => {
    return request(app.getHttpServer())
      .get(BASE_PATH)
      .expect(200)
  });
  it('Return specific product (GET)', () => {
    return request(app.getHttpServer())
      .get(BASE_PATH+productCreatedTest.id)
      .expect(200)
  });
  it('Edit specific product (PATCH)', () => {
    return request(app.getHttpServer())
      .patch(BASE_PATH+productCreatedTest.id)
      .send({
        name: editedName
      })
      .expect(200)
      .expect((res)=>{
        expect(res.body).toEqual(
        { 
          id: productCreatedTest.id,
          name: editedName,
          price: productCreatedTest.price,
          description: productCreatedTest.description,
          image: productCreatedTest.image,
          categoryId: productCreatedTest.categoryId,
          createdAt: productCreatedTest.createdAt,
          updatedAt: res.body.updatedAt
        }
        )
      })
  });
  it('Delete specific product (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(BASE_PATH+productCreatedTest.id)
      .expect(204)
  });

  afterAll(()=>{
    app.enableShutdownHooks();
    app.close();
  })
});
