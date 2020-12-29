import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

// Movie API 기능을 담당하는 모듈
@Module({
	controllers : [MoviesController],
	providers : [MoviesService], /* MoviesService를 Controller에 Inject*/
})
export class MoviesModule {}
