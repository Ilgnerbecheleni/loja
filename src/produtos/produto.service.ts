/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm";
import {InjectRepository } from '@nestjs/typeorm'
import { AtualizaProdutoDTO } from "./Dto/AtualizaProduto.dto";
import { ListaProdutoDTO } from "./Dto/ListaProduto.dto";

@Injectable()
export class ProdutoService{
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository : Repository <ProdutoEntity>
    ) { }

        async create(produto:ProdutoEntity){
            await this.produtoRepository.save(produto);
            return produto;
        }
async list(){
    const produtosSalvos = await this.produtoRepository.find();
    const produtosLista = produtosSalvos.map(
      (produto) => new ListaProdutoDTO(produto.id, produto.nome),
    );
    return produtosLista;
}


async update(id:string , produtoEntity : AtualizaProdutoDTO){
    this.produtoRepository.update(id,produtoEntity);
  }

  async delete(id:string){
    this.produtoRepository.delete(id);
  }



}