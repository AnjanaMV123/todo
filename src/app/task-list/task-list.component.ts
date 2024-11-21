import { Component,OnInit } from '@angular/core';
import { TaskService,Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => this.fetchTasks());
  }
}