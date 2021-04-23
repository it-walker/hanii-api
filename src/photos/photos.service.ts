import { Injectable } from '@nestjs/common'
import { InjectRepository, InjectConnection } from '@nestjs/typeorm'
import { Repository, Connection } from 'typeorm'
import { Photo } from '../database/entities/photo.entity'

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(Photo)
        private readonly repository: Repository<Photo>,
        @InjectConnection()
        private readonly connection: Connection
    ) {}

    async all(): Promise<Photo[]> {
        return await this.repository.find()
    }

    async one(id: number): Promise<Photo> {
        return await this.repository.findOne(id)
    }

    async create(data: Partial<Photo>): Promise<Photo> {
        const queryRunner = this.connection.createQueryRunner()

        await queryRunner.connect()
        await queryRunner.startTransaction()
        try {
            const createdPhoto = await queryRunner.manager
                .getRepository(Photo)
                .save(data)
            await queryRunner.commitTransaction()
            return createdPhoto
        } catch (err) {
            console.log(err)
            await queryRunner.rollbackTransaction()
        } finally {
            await queryRunner.release()
        }
    }

    async update(id: number, data: Partial<Photo>): Promise<void> {
        const origin = await this.repository.findOne(id)
        const updateData = Object.assign(origin, data) // 上書き
        await this.repository.save(updateData)
    }

    async remove(id: number): Promise<void> {
        const obj = await this.repository.findOne(id)
        await this.repository.remove(obj)
    }
}
