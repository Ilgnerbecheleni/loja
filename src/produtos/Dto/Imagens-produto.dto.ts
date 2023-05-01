/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class ImagemProdutoDTO {

    @IsNotEmpty({
        message: 'Insira url da imagem do produto',
      })
    url: string;
    @IsNotEmpty({
        message: 'Insira descricao imagem do produto',
      })
    descricao: string;
  }