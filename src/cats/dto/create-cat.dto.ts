import { IsInt, IsString } from 'class-validator'
import { Cat } from '../interfaces/cats.interface'
import { ApiProperty } from '@nestjs/swagger'

export class CreateCatDto implements Cat {
    @ApiProperty({
        type: String,
        required: true,
    })
    @IsString()
    readonly name: string
    @ApiProperty({
        type: Number,
        required: true,
    })
    @IsInt()
    readonly age: number
    @ApiProperty({
        type: String,
    })
    @IsString()
    readonly breed: string
}
