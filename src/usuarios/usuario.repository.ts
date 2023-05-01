/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

/* eslint-disable prettier/prettier */
@Injectable()
export class UsuarioRepository {
    private usuarios:UsuarioEntity[] = [];

    async create(usuario:UsuarioEntity) {

      this.usuarios.push(usuario);
      console.log(this.usuarios);
    }

    async list(){
      return this.usuarios;
    }

    async EmailisExists(email:string){
      const user = this.usuarios.find(
        usuario => usuario.email === email
      )

      return user !== undefined;
    }

    async getByID(id:string){
      const user = this.usuarios.find(
        userSave => userSave.id === id
      );
      if(!user){
        throw new Error("Usuario nao existe")
      }
      return user ;
    }

    async update(id:string , user: Partial<UsuarioEntity>){

      const userUpdated = this.getByID(id);
      //pega todas as chaves e valores

      Object.entries(user).forEach(([chave,valor])=>{
        if(chave === id){
          return
        }
        userUpdated[chave]= valor ;
      })

      return userUpdated ;

    }

    async delete(id:string){
      const user = this.getByID(id);

      this.usuarios = this.usuarios.filter(
        userSave => userSave.id != id
      )
      return user ;
    }


  }
