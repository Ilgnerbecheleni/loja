/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioService } from "../usuario.service";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async:true})  // passa que e um validator assincrono
export class EmailUniquevalidator implements ValidatorConstraintInterface {

   constructor(private readonly userService : UsuarioService){}

    async validate(value: any, validationArguments?: ValidationArguments):  Promise<boolean> {

        const user = await this.userService.EmailisExists(value);

        return !user ;

    }
}


//funcao decorator personalizada
export const EmailUnique = (opcoesvalidator : ValidationOptions) =>{
    return (objeto: Object , prorpiedade:string) =>{
        registerDecorator({
            target:objeto.constructor,
            propertyName:prorpiedade,
            options:opcoesvalidator,
            constraints:[],
            validator:EmailUniquevalidator
        })
    }
}