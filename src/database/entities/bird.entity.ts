import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Bird {
    @PrimaryGeneratedColumn()
    id: number
    @ApiProperty({ example: 'ちゃこ', description: '鳥の名前' })
    @Column()
    name: string
    @ApiProperty({ example: '緑', description: '色' })
    @Column()
    color: string
    @ApiProperty({ example: 4, description: '年齢' })
    @Column()
    age: number
}
