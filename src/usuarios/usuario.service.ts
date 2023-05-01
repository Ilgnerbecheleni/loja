/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GetusuarioDTo } from "./Dto/get-usuario.dto";
import { UsuarioEntity } from "./usuario.entity";

import { Repository } from "typeorm";
import { UpdateUsuarioDto } from "./Dto/update-usuario.dto";


@Injectable()

export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
      ) {}

      async create(usuarioEntity : UsuarioEntity ){

        await this.usuarioRepository.save(usuarioEntity)
      }

      async listUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.find();
        const usuariosLista = usuariosSalvos.map(
          (usuario) => new GetusuarioDTo(usuario.id, usuario.nome),
        );
        return usuariosLista;
      }

      async buscaPorEmail(email: string) {
        const checkEmail = await this.usuarioRepository.findOne({
          where: { email },
        });
        return checkEmail;
      }

      async update(id:string , usuarioEntity : UpdateUsuarioDto){
        this.usuarioRepository.update(id,usuarioEntity);
      }

      async delete(id:string){
        this.usuarioRepository.delete(id);
      }




}