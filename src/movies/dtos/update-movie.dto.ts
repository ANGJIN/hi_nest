import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// PartialType을 이용해 property가 optional이 될 수 있게 만들어준다
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}