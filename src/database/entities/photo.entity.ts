import { User } from 'src/database/entities/user.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 500 })
    name: string

    @Column('text')
    description: string

    @Column()
    filename: string

    @Column('int')
    views: number

    @Column()
    isPublished: boolean

    @ManyToOne(() => User, (user) => user.photos)
    user: User
}
