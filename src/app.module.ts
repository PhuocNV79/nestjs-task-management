import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'phuocnv4',
      password: '123456789',
      database: 'nestjs-task-management',
      entities: [],
      synchronize: true,
      autoLoadEntities: true, // nestjs tu tim cac file .entity.ts de load
    }),
    TasksModule,
    UserModule,
  ], // Danh sach cac module can thiet cho module nay su dung
})
export class AppModule {}
