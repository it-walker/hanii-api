import { Module } from '@nestjs/common'
import { CatsController } from './cats.controller'
import { catsProviders } from './cats.providers'
import { CatsService } from './cats.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Cat } from './cat.entity'

@Module({
    controllers: [CatsController],
    providers: [CatsService, ...catsProviders],
    exports: [CatsService],
    imports: [TypeOrmModule.forFeature([Cat])],
})
export class CatsModule {
    constructor(private catsService: CatsService) {}
}
