/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailUniquevalidator } from "./validators/email-unique.validator";
import { UsuarioService } from "./usuario.service";
import { UsuarioEntity } from "./usuario.entity";

@Module({
    imports:[TypeOrmModule.forFeature([UsuarioEntity])],
    controllers:[UsuarioController],
    providers:[UsuarioService, UsuarioRepository , EmailUniquevalidator],
    exports:[]
})
export class UsuarioModule {

}