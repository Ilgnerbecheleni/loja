/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuarios/usuario.module';
import { ProdutoModule } from './produtos/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './Config/Postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { UsuarioEntity } from './usuarios/usuario.entity';


@Module({
  imports: [
    UsuarioModule ,
    ProdutoModule,
    ConfigModule.forRoot({ //CONFIGURA .ENV NIVEL GLOBAL
      isGlobal:true
    }),
  TypeOrmModule.forRootAsync({
    useClass:PostgresConfigService,
    inject:[PostgresConfigService]
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
