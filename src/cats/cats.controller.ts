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
// import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './cats.entity'
// import { Response } from 'express'
import { LoggingInterceptor } from 'src/common/middleware/logging.interceptor'

@UseInterceptors(new LoggingInterceptor())
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

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
