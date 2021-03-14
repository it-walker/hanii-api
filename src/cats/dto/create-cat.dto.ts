import { IsInt, IsString } from 'class-validator'
import { Cat } from '../interfaces/cats.interface'
export class CreateCatDto implements Cat {
    @IsString()
    readonly name: string
    @IsInt()
    readonly age: number
    @IsString()
    readonly breed: string
}
