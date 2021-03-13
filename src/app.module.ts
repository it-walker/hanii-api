import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from './config/config.module'
import { CatsModule } from './cats/cats.module'

@Module({
    imports: [ConfigModule.register({ folder: './config' }), CatsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
