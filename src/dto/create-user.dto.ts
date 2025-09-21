import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  Min,
} from 'class-validator';

export class CreateUserDto {
 
 
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;


}
