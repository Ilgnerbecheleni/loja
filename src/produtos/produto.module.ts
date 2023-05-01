/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProtudoService } from "./produto.service";


@Module({
    imports:[],
    controllers:[ProdutoController],
    providers:[ProtudoService]
})
export class ProdutoModule{}