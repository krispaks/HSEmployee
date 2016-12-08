import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
    <app-title [title]="title" [subtitle]="subtitle"></app-title>
    <nav>
        <a routerLink="" routerLinkActive="active">Contact</a>
        <a routerLink="/employee" routerLinkActive="active">Employees</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css'],
    providers: []
})

export class AppComponent {
    title = 'Hyphen Solutions Employee Portal';
    subtitle = '';
}