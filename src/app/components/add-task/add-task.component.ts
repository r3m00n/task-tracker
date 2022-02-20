import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter<Task>();
  text!: string;
  date!: string;
  reminder: boolean = false;
  errorMsg!: string;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text || !this.date) {
      this.errorMsg = 'Please fill in all fields.';
      return;
    }

    const newTask = {
      id: Math.round(Math.random() * 99999), // geht besser i know
      text: this.text,
      date: this.date,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.errorMsg = '';
    this.text = '';
    this.date = '';
    this.reminder = false;
  }
}
