import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  // TODO: wenn keine Tasks da sind (keine Tasks in der DB)
  // sollte eine Meldung erscheinen dafür Template auslagern

  // TODO: wenn Tasks da sind sagen dass man mit Doppelklick
  // den Reminder togglen kann
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    let deletedTask = task;
    this.taskService.deleteTask(task).subscribe((task) => {
      console.log(task);
      this.tasks = this.tasks.filter((t) => t.id !== deletedTask.id);
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
