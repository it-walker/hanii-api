import { Injectable } from '@nestjs/common'
import { InjectRepository, InjectConnection } from '@nestjs/typeorm'
import { Repository, Connection } from 'typeorm'
import { User } from '../database/entities/user.entity'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
        @InjectConnection()
        private readonly connection: Connection
    ) {}

    async all(): Promise<User[]> {
        return await this.connection
            .getRepository(User)
            .find({ relations: ['photos'] })
    }

    async one(id: number): Promise<User> {
        return await this.repository.findOne(id)
    }

    async create(userDto: UserDto): Promise<User> {
        return await this.repository.save(userDto)
    }

    async update(id: number, data: Partial<User>): Promise<void> {
        const origin = await this.repository.findOne(id)
        const updateData = { ...origin }
        await this.repository.save(updateData)
    }

    async remove(id: number): Promise<void> {
        const user = await this.repository.findOne(id)
        await this.repository.remove(user)
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ where: { email } })
    }
}
