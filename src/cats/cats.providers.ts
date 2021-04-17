import { DATABASE_CONNECTION } from 'src/utils/constants'
import { Connection } from 'typeorm'
import { Cat } from './cat.entity'

export const catsProviders = [
    {
        provide: 'CATS_REPOSITORY',
        useValue: (connection: Connection) => connection.getRepository(Cat),
        inject: [DATABASE_CONNECTION],
    },
]
