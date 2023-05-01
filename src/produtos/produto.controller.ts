/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CreateProdutoDTO } from "./Dto/Create-produto.dto";
import { AtualizaProdutoDTO } from "./Dto/AtualizaProduto.dto";
import {  v4 as uuid } from 'uuid';
import { ProdutoEntity } from "./produto.entity";
import { ProdutoService } from "./produto.service";
@Controller('/produtos')
export class ProdutoController {
constructor(
  private readonly produtoService : ProdutoService
  ) {}


@Get()
async list (){
    return this.produtoService.list();
}


@Post()
async criaNovo(@Body() dadosProduto: CreateProdutoDTO) {
  const produto = new ProdutoEntity();

  produto.id = uuid();
  produto.nome = dadosProduto.nome;
  produto.usuarioId = dadosProduto.usuarioId;
  produto.valor = dadosProduto.valor;
  produto.quantidade = dadosProduto.quantidade;
  produto.descricao = dadosProduto.descricao;
  produto.categoria = dadosProduto.categoria;
  produto.caracteristicas = dadosProduto.caracteristicas;
  produto.imagens = dadosProduto.imagens;

  const produtoCadastrado = this.produtoService.create(produto);
  return produtoCadastrado;
}

@Put('/:id')
async atualiza(
  @Param('id') id: string,
  @Body() dadosProduto: AtualizaProdutoDTO
) {
  const produtoAlterado = await this.produtoService.update(
    id,
    dadosProduto,
  );

  return {
    mensagem: 'produto atualizado com sucesso',
    produto: produtoAlterado,
  };
}

@Delete('/:id')
async remove(@Param('id') id: string) {
  const produtoRemovido = await this.produtoService.delete(id);

  return {
    mensagem: 'produto removido com sucesso',
    produto: produtoRemovido,
  };
}
}

