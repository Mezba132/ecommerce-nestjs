import { IsString, IsNotEmpty, IsNumber, IsObject } from "class-validator"

export class ProductDto {
    @IsNotEmpty()
    @IsString()
    name : string

    @IsString()
    image : string

    @IsNotEmpty()
    @IsNumber()
    price : number

    @IsObject()
    category : object

    @IsObject()
    brand : object
}