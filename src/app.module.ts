import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';
import { User } from './user/user.entity';
import {UsersModule} from './user/users.module'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Qwert123456&',
    database: 'user_group',
    entities: ["src/**/**.entity.ts"],
    synchronize: true,
  }), UsersModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
