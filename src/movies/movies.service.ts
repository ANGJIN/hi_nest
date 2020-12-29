import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import {Movie} from './entities/movie.entity';

// Injectable decorator로 module에서 provider property로 주었을 때 Dependency Injection이 일어날 수 있도록 한다
@Injectable()
export class MoviesService {
	private movies : Movie[] = [];

	getAll() : Movie[] {
		return this.movies;
	}

	getOne(id:number) :Movie {
		const movie = this.movies.find(movie => movie.id === id);
		if(!movie) {
			throw new NotFoundException(`Movie with ID ${id} not found`);
		}
		return movie;
	}

	deleteOne(id:number) {
		this.getOne(id);
		this.movies = this.movies.filter(movie => movie.id !== id);
	}

	create(movieData : CreateMovieDto) {
		this.movies.push({
			id : this.movies.length + 1,
			...movieData
		});
	}

	update(id:number, updateData : UpdateMovieDto) {
		const movie = this.getOne(id);
		this.deleteOne(id);
		this.movies.push({...movie, ...updateData});
	}
}
