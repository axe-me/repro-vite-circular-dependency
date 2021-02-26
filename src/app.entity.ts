import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppMeta } from './app-meta.entity';

@Entity()
export class App {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => AppMeta, (meta) => meta.app)
  metas: AppMeta[];
}
