import { Module } from '@nestjs/common'
import { CatsController } from './cats.controller'
import { catsProviders } from './cats.providers'
import { CatsService } from './cats.service'

@Module({
    controllers: [CatsController],
    providers: [CatsService, ...catsProviders],
    exports: [CatsService],
})
export class CatsModule {
    constructor(private catsService: CatsService) {}
}
