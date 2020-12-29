import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

// movies.service.ts 의 unit test를 위한 file

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // test가 끝난 후 database clean과 같은 작업 가능
  afterAll(() => {});

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an Array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        genres: ['test'],
        title: 'testMovie',
        year: 2020,
      });
      const result = service.getOne(1);
      expect(result).toBeDefined;
      expect(result.id).toEqual(1);
    });

    it('should throw an error', () => {
      try {
        service.getOne(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual('Movie with ID 999 not found');
      }
    });
  });

  describe('deleteOne', () => {
    it('should delete a movie', () => {
      service.create({
        genres: ['test'],
        title: 'testMovie',
        year: 2020,
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    it('should return 404 error', () => {
      try {
        service.deleteOne(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual('Movie with ID 999 not found');
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        genres: ['test'],
        title: 'testMovie',
        year: 2020,
      });
      const afterCreate = service.getAll().length;

      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      // 일일이 create하지 않고 beforeEach에 넣는 방법도 있다
      service.create({
        genres: ['test'],
        title: 'testMovie',
        year: 2020,
      });

      service.update(1, { title: 'updated title' });

      const result = service.getOne(1);
      expect(result.title).toEqual('updated title');
    });

    it('should throw NotFoundException', () => {
      try {
        service.update(999, {});
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual('Movie with ID 999 not found');
      }
    });
  });
});
