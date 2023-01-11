import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // Lay danh sach cac task
  @Get()
  getTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  // Tao 1 task
  @Post()
  createTask(@Body() taskDto: CreateTaskDto): Task {
    return this.taskService.createTask(taskDto);
  }

  // Tim task theo ID

  @Get('/:id')
  getTaskById(@Param('id') taskId: string): Task {
    return this.taskService.getTaskById(taskId);
  }

  // Xoa 1 task by id
  @Delete('/delete/:id')
  deleteTaskById(@Param('id') Id: string) {
    this.taskService.deleteTaskById(Id);
  }

  //Update Task
  @Patch('/update/:id/status')
  updateTaskById(
    @Param('id') Id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    status = TaskStatus.DONE;
    return this.taskService.updateTaskStatusById(Id, status);
  }
}
