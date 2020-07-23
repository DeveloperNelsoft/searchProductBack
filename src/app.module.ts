import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';

@Module({

  // return await mongoose.connect('mongodb://172.17.0.1:27017/promotions',
  // {
  //       "user": "productListUser",
  //       "pass": "productListPassword"
  // })

  imports: [
    MongooseModule.forRoot('mongodb://172.17.0.1:27017/promotions', {
      "user": "productListUser",
      "pass": "productListPassword",
      auth: {
        authdb: 'admin'
      } 
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
