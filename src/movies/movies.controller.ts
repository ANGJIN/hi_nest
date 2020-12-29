import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { getEnabledCategories } from 'trace_events';

// 'movies'가 controller의 entry point가 된다
@Controller('movies')
export class MoviesController {

	@Get()
	getAll() {
		return 'This will return all movies';
	}

	@Get("search")
	search(@Query("year") searchingYear:string) {
		return `Searching for movie made after year ${searchingYear}`;
	}

	@Get('/:id')
	getOne(@Param('id') movieId : string) {
		return `This will return one movie with id ${movieId}`;
	}

	@Post()
	create(@Body() movieData) {
		return movieData;
	}

	@Delete("/:id")
	remove(@Param("id") movieId:string) {
		return `This will remove movie with id ${movieId}`;
	}

	@Patch("/:id")
	patch(@Param("id") movieId:string, @Body() movieData) {
		return {
			updatedMovie : movieId,
			...movieData,
		};
	}
}
