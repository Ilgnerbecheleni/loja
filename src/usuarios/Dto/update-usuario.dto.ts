/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnique } from "../validators/email-unique.validator";

export class UpdateUsuarioDto {


@IsNotEmpty({
    message: "Insira um nome de usuario"
})
@IsOptional()
 nome:string;
 @EmailUnique({message:"Ja existe um usuario com esse email"})
 @IsEmail(undefined,{
    message: "E-mail inválido"
 })
 @IsNotEmpty()
 @IsOptional()
 email:string;

 @MinLength(6,{
    message:"a senha deve ter mais de 6 caracteres"
 })
 @IsOptional()
 senha:string;

}