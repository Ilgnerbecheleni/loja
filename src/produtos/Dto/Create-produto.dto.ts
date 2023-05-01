/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsNotEmpty, IsNumber, IsUUID, MaxLength,  ValidateNested } from 'class-validator';
import { CaracteristicaProdutoDTO } from './Caracteristica-produto.dto';
import { ImagemProdutoDTO } from './Imagens-produto.dto';

export class CreateProdutoDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usuarioId: string;

  @IsNotEmpty({
    message: 'Insira um nome do produto',
  })


  nome: string;

  @IsNumber()
  valor: number;

  @IsNumber()
  quantidade: number;


  @IsNotEmpty({
    message: 'Insira descricao do produto',
  })

  @MaxLength(1000)
  descricao: string;


  @IsNotEmpty({
    message: 'Insira caracteristica do produto',
  })
  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];


  @IsNotEmpty({
    message: 'Insira caracteristica do produto',
  })
  @ValidateNested()
  @IsArray()
  @Type(() =>ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty({
    message: 'Insira data criacao do produto',
  })
  dataCriacao : Date
  @IsNotEmpty({
    message: 'Insira data atualizacao do produto',
  })

  dataAtualizacao : Date



  @IsNotEmpty({
    message: 'Insira categoria do produto',
  })
  categoria: string;
}
