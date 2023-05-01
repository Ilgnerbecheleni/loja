/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { EmailUniquevalidator } from "./validators/email-unique.validator";


@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuarioService , EmailUniquevalidator],
    exports:[]
})
export class UsuarioModule {

}