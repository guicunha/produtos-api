import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosContoller } from './produtos.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProdutosContoller
  ],
  providers: [AppService],
})
export class AppModule {}
