/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { UsuarioService } from "./usuario.service";
import { CreateUsuarioDto } from "./Dto/create-usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid} from 'uuid';
import { GetusuarioDTo } from "./Dto/get-usuario.dto";
import { UpdateUsuarioDto } from "./Dto/update-usuario.dto";
@Controller('/usuarios')
export class UsuarioController {


    constructor(private readonly usuariorepository : UsuarioService) {

    }
    @Post()
    async create(@Body() body:CreateUsuarioDto){
        try {
            const user = new UsuarioEntity();
            user.email = body.email;
            user.senha = body.senha;
            user.nome = body.nome;
            user.id = uuid();
            this.usuariorepository.create(user);
            return {message:"Usuario Criado" , usuario: new GetusuarioDTo(user.id , user.nome) }
        } catch (error) {

        }

    }

    @Get()
    async list(){

        const users = await this.usuariorepository.list();

        const listaUsers = users.map (  // filtra usuarios e cria um retorno somente com as info necessarias
            usuario => new GetusuarioDTo(
                usuario.id,
                usuario.nome
            )
        );

        return listaUsers ;

    }

    @Put('/:id')
    async putUser(@Param('id') id:string , @Body() novouser : UpdateUsuarioDto){
      const userUpdated = await  this.usuariorepository.update(id,novouser);

      return {message:"Usuario Atualizado" , usuario: userUpdated }
    }

    @Delete('/:id')
async deleteUsuario (@Param('id')id:string){
    const usuarioDelete = await this.usuariorepository.delete(id);
    return { ususario:usuarioDelete , message:'removido com sucesso!'}
}

}