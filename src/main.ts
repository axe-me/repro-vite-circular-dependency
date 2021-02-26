import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const createViteNodeApp = NestFactory.create(AppModule);
