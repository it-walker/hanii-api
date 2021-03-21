import { Sequelize } from 'sequelize-typescript'
import { SEQUELIZE } from 'src/utils/constants'
import { User } from 'src/users/user.entity'

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'development',
            })
            sequelize.addModels([User])

            await sequelize.sync()
            return sequelize
        },
    },
]
