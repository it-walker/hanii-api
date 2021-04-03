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
import { Cat } from './interfaces/cats.interface'
// import { Response } from 'express'
import { LoggingInterceptor } from 'src/common/middleware/logging.interceptor'
import { CreateCatDto } from './dto/create-cat.dto'
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiBody,
} from '@nestjs/swagger'

@ApiTags('cats')
@UseInterceptors(new LoggingInterceptor())
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @ApiOperation({ summary: '登録されている猫を検索します' })
    @ApiResponse({ status: 200, description: 'success' })
    @ApiResponse({ status: 400, description: 'エラー' })
    @Get()
    async findAll(): Promise<Cat[]> {
        return await this.catsService.findAll()
    }

    @ApiOperation({ summary: '指定されたIDの猫情報を取得します。' })
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

    @ApiBody({ type: [CreateCatDto] })
    @Post()
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        // this.catsService.create(createCatDto)
    }
}
