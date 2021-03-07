import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cats.interface';
import { Response } from 'express'

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    @Post()
    async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
        this.catsService.create(createCatDto)
        res.status(HttpStatus.CREATED).send()
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }
}
