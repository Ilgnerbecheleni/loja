/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class CaracteristicaProdutoDTO {

    @IsNotEmpty({
        message: 'Insira nome do produto',
      })
    nome: string;
    @IsNotEmpty({
        message: 'Insira descricao da caracteristica do produto',
      })
    descricao: string;
  }