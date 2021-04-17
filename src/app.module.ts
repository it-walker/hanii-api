import { Connection } from 'typeorm'
import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
    // RequestMethod,
} from '@nestjs/common'
// import { ConfigModule } from './config/config.module'
import { ConfigModule } from '@nestjs/config'
import { CatsModule } from './cats/cats.module'
import { LoggerMiddleware } from './common/middleware/logger.middleware'
// import { CatsController } from './cats/cats.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { DatabaseModule } from './database/database.module'
import { AuthModule } from './auth/auth.module'
import { User } from './users/user.entity'
import { PhotosModule } from './photos/photos.module'
import { Photo } from './photos/photo.entity'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        // DatabaseModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'development',
            entities: [User, Photo],
            synchronize: true,
            autoLoadEntities: true,
            logging: true,
        }),
        // CatsModule,
        UsersModule,
        // AuthModule,
        PhotosModule,
    ],
    controllers: [],
    providers: [],
})
// export class AppModule implements NestModule {
//     constructor(private connection: Connection) {}
//     configure(consumer: MiddlewareConsumer) {
//         consumer.apply(LoggerMiddleware)
//     }
// }
export class AppModule {}
