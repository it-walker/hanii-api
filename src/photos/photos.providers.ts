import { DATABASE_CONNECTION, PHOTO_REPOSITORY } from 'src/utils/constants'
import { Connection } from 'typeorm'
import { Photo } from '../database/entities/photo.entity'

export const photosProviders = [
    {
        provide: PHOTO_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(Photo),
        inject: [DATABASE_CONNECTION],
    },
]
