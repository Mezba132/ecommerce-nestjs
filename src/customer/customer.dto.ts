import { IsString, IsNotEmpty, IsEmail, Matches } from "class-validator"

export class CustomerDto {
    @IsNotEmpty()
    @IsString()
    name : string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsString()
    city : string

    @IsNotEmpty()
    @IsString()
    address : string

    @IsNotEmpty()
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/)
    phone : string
}