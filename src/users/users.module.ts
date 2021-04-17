import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
// import { DatabaseModule } from 'src/database/database.module'
import { userProviders } from './users.providers'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'

@Module({
    // imports: [DatabaseModule],
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {
    constructor(private usersService: UsersService) {}
}
