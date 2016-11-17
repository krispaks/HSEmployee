import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
    <app-title [title]="title" [subtitle]="subtitle"></app-title>
    <app-contact></app-contact>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/employees" routerLinkActive="active">Employees</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css'],
    providers: []
})

export class AppComponent {
    title = 'Hyphen';
    subtitle = 'Employees';
}