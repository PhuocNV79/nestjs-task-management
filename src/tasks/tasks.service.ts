import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: '1',
      title: 'nestjs',
      description: 'dang hoc nestjs',
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: '2',
      title: 'react',
      description: 'dang hoc react',
      status: TaskStatus.IN_PROGRESS,
    },
  ];
  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(taskDto: CreateTaskDto): Task {
    const { title, description } = taskDto;
    const task: Task = {
      id: uuidV4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    return task;
  }

  // Tim task theo id
  getTaskById(taskId: string) {
    return this.tasks.find((task) => task.id == taskId);
  }

  // Delte 1 task
  deleteTaskById(Id: String): void {
    this.tasks = this.tasks.filter((task) => task.id != Id);
    console.log(this.tasks);
  }

  // Update task status
  updateTaskStatusById(Id: string, status: TaskStatus): Task {
    const task = this.getTaskById(Id);
    task.status = status;
    return task;
  }
}
