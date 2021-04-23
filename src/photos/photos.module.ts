import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { Photo } from '../database/entities/photo.entity'
import { photosProviders } from './photos.providers'
import { PhotosService } from './photos.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PhotosController } from './photos.controller'

// @Module({
//     imports: [DatabaseModule],
//     providers: [PhotosService, ...photosProviders],
//     exports: [PhotosService],
//     // imports: [TypeOrmModule.forFeature([Photo])],
// })
// export class PhotosModule {
//     constructor(private photosService: PhotosService) {}
// }
@Module({
    // TODO: DatabaseModuleにできないか
    // imports: [DatabaseModule],
    // providers: [PhotosService, ...photosProviders],
    imports: [TypeOrmModule.forFeature([Photo])],
    providers: [PhotosService],
    controllers: [PhotosController],
})
export class PhotosModule {
    constructor(private photosService: PhotosService) {}
}
