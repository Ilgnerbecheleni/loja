/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";
import { ProdutoEntity } from "../produto.entity";

export class ImagemProdutoDTO {
  id:string ;
    @IsNotEmpty({
        message: 'Insira url da imagem do produto',
      })
    url: string;
    @IsNotEmpty({
        message: 'Insira descricao imagem do produto',
      })
    descricao: string;
    produto: ProdutoEntity;
  }