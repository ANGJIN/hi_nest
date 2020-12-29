import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// Nest가 Application create에 이요하는 root module.
// 다른 기능을 담당하는 module을 작성 시, 추가해 주어야 함.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
