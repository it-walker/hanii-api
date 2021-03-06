import { User } from '../database/entities/user.entity'
import { Connection } from 'typeorm'
import { DATABASE_CONNECTION, USER_REPOSITORY } from 'src/utils/constants'

export const userProviders = [
    {
        provide: USER_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: [DATABASE_CONNECTION],
    },
]
