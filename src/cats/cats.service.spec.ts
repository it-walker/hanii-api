import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface'

const baseCats: Cat[] = [
  {
    name: 'rin',
    age: 10,
    breed: '雑種'
  },
  {
    name: 'hani',
    age: 5,
    breed: '茶トラ'
  },
]

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  afterEach(async () => {
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find all success', () => {
    baseCats.forEach(cat => service.create(cat))
    expect(service.findAll()).toStrictEqual(baseCats)
  })

  it('create success', () => {
    service.create({name: 'name', age: 1, breed: 'breed'})
    expect(service.findAll()).toStrictEqual([{name: 'name', age: 1, breed: 'breed'}])
  })
});
