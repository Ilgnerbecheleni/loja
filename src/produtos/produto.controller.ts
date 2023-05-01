/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProtudoService } from "./produto.service";
import { CreateProdutoDTO } from "./Dto/Create-produto.dto";
import { AtualizaProdutoDTO } from "./Dto/AtualizaProduto.dto";

@Controller('/produtos')
export class ProdutoController {
constructor(private readonly produtoService : ProtudoService) {

}
@Get()
async list (){
    return this.produtoService.list();
}


@Post()
async create (@Body() produto : CreateProdutoDTO){
    return this.produtoService.create(produto)
}

@Put('/:id')
async atualiza(
  @Param('id') id: string,
  @Body() dadosProduto: AtualizaProdutoDTO
) {
  const produtoAlterado = await this.produtoService.atualiza(
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
  const produtoRemovido = await this.produtoService.remove(id);

  return {
    mensagem: 'produto removido com sucesso',
    produto: produtoRemovido,
  };
}
}

