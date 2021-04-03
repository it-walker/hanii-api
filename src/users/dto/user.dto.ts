import { IsString, IsInt, IsNumber } from 'class-validator'

export class UserDto {
    @IsString()
    readonly name: string
    @IsString()
    readonly email: string
    @IsString()
    readonly password: string
    @IsString()
    readonly gender: string
}
