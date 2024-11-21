import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService,Task } from '../task.service';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  task:Task={title:'',completed:false };

  constructor(private taskService:TaskService,private router:Router) {}

  createTask():void{
    this.taskService.createTask(this.task).subscribe({
      next:()=>this.router.navigate(['/tasks']),
      error:(error)=>console.error('error creating task:',error)
    });
  }
}
