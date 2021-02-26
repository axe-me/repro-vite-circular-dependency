import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppMeta } from './app-meta.entity';
import { AppController } from './app.controller';
import { App } from './app.entity';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database.sqlite',
      entities: [App, AppMeta],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
