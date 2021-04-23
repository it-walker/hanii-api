import {
    Body,
    Controller,
    Delete,
    Get,
    Put,
    HttpCode,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common'
import { UserDto } from './dto/user.dto'
import { User } from '../database/entities/user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    all(): Promise<User[]> {
        return this.service.all()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    one(@Param('id') id: number): Promise<User> {
        return this.service.one(id)
    }

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createUserDto: UserDto): Promise<User> {
        return this.service.create(createUserDto)
    }

    @Put('update/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async update(
        @Param('id') id: number,
        @Body() updateUserDto: UserDto
    ): Promise<void> {
        this.service.update(id, updateUserDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number): Promise<void> {
        this.service.remove(id)
    }
}
