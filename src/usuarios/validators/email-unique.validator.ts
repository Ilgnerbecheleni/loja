/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";
import { UsuarioService } from "../usuario.service";

@Injectable()
@ValidatorConstraint({async:true})  // passa que e um validator assincrono
export class EmailUniquevalidator implements ValidatorConstraintInterface {
    constructor(private usuarioService: UsuarioService) {}

    async validate(
      value: any,
      _validationArguments?: ValidationArguments,
    ): Promise<boolean> {
      const usuarioComEmailExiste = await this.usuarioService.buscaPorEmail(
        value,
      );
      return !usuarioComEmailExiste;
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