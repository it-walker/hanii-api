import { Inject, Injectable } from '@nestjs/common'
import { Cat } from '../cats/cats.entity'

@Injectable()
export class CatsService {
    constructor(
        @Inject('CATS_REPOSITORY') private readonly CATS_REPOSITORY: typeof Cat
    ) {}

    async findAll(): Promise<Cat[]> {
        return await this.CATS_REPOSITORY.findAll<Cat>()
    }
}
