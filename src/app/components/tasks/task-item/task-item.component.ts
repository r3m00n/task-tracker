import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>();

  faTimes = faTimes;

  constructor() {}

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }
}
