import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// Nest가 Application create에 이요하는 root module.
// 다른 기능을 담당하는 module을 작성 시, 추가해 주어야 함.
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
