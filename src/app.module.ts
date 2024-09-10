import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { dataSourceOptions } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule],
})
export class AppModule {}
