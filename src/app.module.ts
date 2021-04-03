import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
    // RequestMethod,
} from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
// import { ConfigModule } from './config/config.module'
import { ConfigModule } from '@nestjs/config'
import { CatsModule } from './cats/cats.module'
import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { CatsController } from './cats/cats.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module'
import { DatabaseModule } from './database/database.module'
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        // ConfigModule.register({ folder: './config' }),
        // SequelizeModule.forRoot({
        //     dialect: 'mysql',
        //     host: 'localhost',
        //     port: 3306,
        //     username: 'root',
        //     password: 'root',
        //     database: 'development',
        //     autoLoadModels: true,
        //     synchronize: true,
        // }),
        CatsModule,
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware)
    }
}
