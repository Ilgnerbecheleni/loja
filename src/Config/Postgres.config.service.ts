/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory,TypeOrmModuleOptions } from "@nestjs/typeorm";


@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory{

constructor(private readonly configService : ConfigService) {}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            type: 'postgres' ,
            host: this.configService.get<string>('DB_HOST') ,
            port:this.configService.get<number>('DB_PORT') ,
            database: this.configService.get<string>('DB_NAME'),
            username: this.configService.get<string>('DB_USERNAME'),
            password: this.configService.get<string>('DB_PASSWORD'),
            entities: [],
            synchronize: true

        }
    }

}