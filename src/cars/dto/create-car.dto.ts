import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
  
  @IsString()
  readonly name: string;
  @IsString()
  @MinLength(3)
  readonly model: string;

}