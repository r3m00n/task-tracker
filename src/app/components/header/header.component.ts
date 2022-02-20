import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title: string = 'TaskTracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
