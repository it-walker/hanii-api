import { databaseConfig } from './database.config'
import { User } from 'src/database/entities/user.entity'
import { Cat } from 'src/cats/cat.entity'
import { createConnection } from 'typeorm'
import { DATABASE_CONNECTION } from 'src/utils/constants'
import { Photo } from 'src/database/entities/photo.entity'

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: async () =>
            await createConnection({
                type: 'mysql',
                host: 'db',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'development',
                entities: [Photo],
                synchronize: true,
            }),
    },
]
