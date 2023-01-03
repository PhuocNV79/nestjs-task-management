import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule], // Danh sach cac module can thiet cho module nay su dung
})
export class AppModule {}
