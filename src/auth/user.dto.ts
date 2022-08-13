import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber, Matches, IsNumber } from "class-validator"

export class UserDto {
    @IsNotEmpty()
    @IsString()
    name : string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsString()
    password : string

    @IsNotEmpty()
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/)
    phone : string
}