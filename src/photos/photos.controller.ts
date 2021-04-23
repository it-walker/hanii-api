import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Delete,
    HttpCode,
    HttpStatus,
    Put,
} from '@nestjs/common'
import { PhotosService } from './photos.service'
import { CreatePhotoDto } from './dto/create.photo.dto'
import { UpdatePhotoDto } from './dto/update.photo.dto'
import { Photo } from '../database/entities/photo.entity'

@Controller('photos')
export class PhotosController {
    constructor(private readonly service: PhotosService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    all(): Promise<Photo[]> {
        return this.service.all()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    one(@Param('id') id: number): Promise<Photo> {
        return this.service.one(id)
    }

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
        return this.service.create(createPhotoDto)
    }

    @Put('update/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async update(
        @Param('id') id: number,
        @Body() updatePhotoDto: UpdatePhotoDto
    ): Promise<void> {
        this.service.update(id, updatePhotoDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number): Promise<void> {
        this.service.remove(id)
    }
}
