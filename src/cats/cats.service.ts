import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    create(cat: Cat) {
        this.cats.push(cat)
    }

    findAll(): Cat[] {
        console.log(this.cats)
        return this.cats
    }
}
