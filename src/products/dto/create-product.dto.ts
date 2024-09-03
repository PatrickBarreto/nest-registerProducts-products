import {IsString, IsNumber, IsNotEmpty, MaxLength, Min, IsInt, IsOptional} from 'class-validator'

export class CreateProductDto {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()   
    name: string

    @Min(0)
    @IsNumber()
    @IsNotEmpty()   
    price: number
    
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string
    
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    image?: string
    
    @Min(1)
    @IsInt()
    @IsNotEmpty()
    categoryId: number
}
