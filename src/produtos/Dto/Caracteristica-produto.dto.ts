/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";
import { ProdutoEntity } from "../produto.entity";

export class CaracteristicaProdutoDTO {

  id:string ;
    @IsNotEmpty({
        message: 'Insira nome do produto',
      })
    nome: string;
    @IsNotEmpty({
        message: 'Insira descricao da caracteristica do produto',
      })
    descricao: string;

    produto: ProdutoEntity;
  }