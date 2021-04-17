import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinTable,
} from 'typeorm'
import { Photo } from '../photos/photo.entity'
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    gender: string

    @OneToMany((type) => Photo, (photo) => photo.user)
    @JoinTable()
    photos: Photo[]
}
