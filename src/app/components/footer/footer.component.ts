import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="mt-7 text-center">
      <p>Copyright &copy; 2022</p>
      <a routerLink="/about">About</a>
    </footer>
  `,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
