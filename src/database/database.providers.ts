import { Sequelize } from 'sequelize-typescript'
import {
    SEQUELIZE,
    ENV_DEVELOPMENT,
    ENV_PRODUCTION,
    ENV_TEST,
} from 'src/utils/constants'
import { databaseConfig } from './database.config'
import { User } from 'src/users/user.entity'
import { Cat } from 'src/cats/cats.entity'

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            let config
            switch (process.env.NODE_ENV) {
                case ENV_DEVELOPMENT:
                    config = databaseConfig.development
                    break
                case ENV_TEST:
                    config = databaseConfig.test
                    break
                case ENV_PRODUCTION:
                    config = databaseConfig.production
                default:
                    config = databaseConfig.development
            }
            const sequelize = new Sequelize(config)
            //     const sequelize = new Sequelize({
            //     dialect: 'mysql',
            //     host: 'localhost',
            //     port: 3306,
            //     username: 'root',
            //     password: 'root',
            //     database: 'development',
            // })
            sequelize.addModels([User, Cat])
            await sequelize.sync()
            return sequelize
        },
    },
]
