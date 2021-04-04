import { Table, Column, Model } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

@Table
export class Cat extends Model<Cat> {
    @ApiProperty({ example: '明智', description: '猫の名前' })
    @Column
    name: string
    @ApiProperty({ example: 3, description: '年齢' })
    @Column
    age: number
    @ApiProperty({ example: '茶トラ', description: '種別' })
    @Column
    breed: string
}
