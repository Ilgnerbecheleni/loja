/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity.dto";

@Injectable()
export class ProtudoService {
 private produtos : ProdutoEntity[]= [];

 async list(){
    return this.produtos;
 }

 async create(produto){
    this.produtos.push(produto);
    return {message:'produto cadastrado'};
 }
 private buscaPorId(id: string) {
   const possivelProduto = this.produtos.find((produto) => produto.id === id);

   if (!possivelProduto) {
     throw new Error('Produto não existe');
   }

   return possivelProduto;
 }

 async atualiza(id: string, dadosProduto: Partial<ProdutoEntity>) {
   const dadosNaoAtualizaveis = ['id', 'usuarioId'];
   const produto = this.buscaPorId(id);
   Object.entries(dadosProduto).forEach(([chave, valor]) => {
     if (dadosNaoAtualizaveis.includes(chave)) {
       return;
     }
     produto[chave] = valor;
   });

   return produto;
 }

 async remove(id: string) {
   const produtoRemovido = this.buscaPorId(id);
   this.produtos = this.produtos.filter((produto) => produto.id !== id);
   return produtoRemovido;
 }

}