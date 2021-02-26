import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { App } from './app.entity';

@Entity()
export class AppMeta {
  @PrimaryGeneratedColumn()
  id: number;

  // remove this field and imports to reproduce the bug
  @ManyToOne(() => App, (app) => app.metas)
  app: App;
}
