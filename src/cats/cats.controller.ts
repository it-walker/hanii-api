import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Res,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './interfaces/cats.interface'
import { Response } from 'express'
import { LoggingInterceptor } from 'src/common/middleware/logging.interceptor'

@UseInterceptors(new LoggingInterceptor())
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    @Post()
    async create(
        @Body(new ValidationPipe()) createCatDto: CreateCatDto,
        @Res() res: Response
    ) {
        this.catsService.create(createCatDto)
        res.status(HttpStatus.CREATED).send()
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Get(':id')
    async findOne(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            })
        )
        id: number
    ) {
        return 1
    }
}
