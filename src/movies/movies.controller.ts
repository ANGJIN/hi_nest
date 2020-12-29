import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// 'movies'가 controller의 entry point가 된다
@Controller('movies')
export class MoviesController {

	constructor(private readonly moviesService:MoviesService) {};

	@Get()
	getAll() : Movie[]{
		return this.moviesService.getAll();
	}

	@Get("search")
	search(@Query("year") searchingYear:string) {
		return `Searching for movie made after year ${searchingYear}`;
	}

	@Get('/:id')
	getOne(@Param('id') movieId : string) : Movie {
		return this.moviesService.getOne(movieId);
	}

	@Post()
	create(@Body() movieData) {
		return this.moviesService.create(movieData);
	}

	@Delete("/:id")
	remove(@Param("id") movieId:string) {
		return this.moviesService.deleteOne(movieId);
	}

	@Patch("/:id")
	patch(@Param("id") movieId:string, @Body() movieData) {
		return this.moviesService.update(movieId, movieData);
	}
}
