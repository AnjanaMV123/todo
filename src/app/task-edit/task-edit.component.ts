import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TaskService,Task } from '../task.service';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent  implements OnInit {
  task: Task = { title: '', completed: false };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTasks().subscribe(data => {
      this.task = data.find(task => task.id === id) || this.task;
    });
  }

  updateTask(): void {
    this.taskService.updateTask(this.task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
