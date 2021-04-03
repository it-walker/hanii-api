import { Injectable, Inject } from '@nestjs/common'
import { USER_REPOSITORY } from 'src/utils/constants'
import { User } from './user.entity'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
    ) {}

    async create(userDto: UserDto): Promise<User> {
        const user = new User()
        user.name = userDto.name
        user.gender = userDto.gender
        user.email = userDto.email
        user.password = userDto.password
        // return user.save()
        return await this.userRepository.create<User>(user)
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

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { email } })
    }

    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { id } })
    }
}
