import { Injectable, Inject } from '@nestjs/common'
import { USER_REPOSITORY } from 'src/utils/constants'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
    ) {}

    async create(createUser: CreateUserDto): Promise<User> {
        const user = new User()
        user.name = createUser.name
        user.age = createUser.age
        user.email = createUser.email
        return user.save()
        // return this.userRepository.create(user)

        // try {
        //     await this.sequelize.transaction(async (t) => {
        //         const transactionHost = { transaction: t }
        //         const user = new User()
        //         user.firstName = createUserDto.firstName
        //         user.lastName = createUserDto.lastName
        //         console.log(user)
        //         await this.userRepository.create(user, transactionHost)
        //     })
        // } catch (err) {
        //     console.log('error だよ!')
        //     console.log(err)
        // }
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll()
    }

    async findOne(id: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id,
            },
        })
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id)
        await user.destroy()
    }
}
