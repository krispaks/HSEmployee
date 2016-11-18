import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
    <app-title [title]="title" [subtitle]="subtitle"></app-title>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/employees" routerLinkActive="active">Employees</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css'],
    providers: []
})

export class AppComponent {
    title = 'Hyphen';
    subtitle = '';
}