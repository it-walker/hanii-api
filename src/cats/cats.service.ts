import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Cat } from './cat.entity'
import { CreateCatDto } from './dto/create-cat.dto'

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat) private readonly catRepository: Repository<Cat>
    ) {}

    async findAll(): Promise<Cat[]> {
        return this.catRepository.find()
    }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        return this.catRepository.create(createCatDto)
    }
}
