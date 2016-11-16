import { Component } from '@angular/core';

export class Employee {
    id: number;
    name: string;
}

const EMPLOYEES: Employee[] = [
  { id: 11, name: 'Khris Paca' },
  { id: 12, name: 'Rick Donaldson' },
  { id: 13, name: 'Carl Tu' },
  { id: 14, name: 'Doug' },
  { id: 15, name: 'Chase Martin' },
  { id: 16, name: 'Scott Yoon' },
  { id: 17, name: 'David Bailey' },
  { id: 18, name: 'Dagny Jewell' },
  { id: 19, name: 'Aldwin' },
  { id: 20, name: 'Leo Wolur' }
];

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>Hyphen Employees</h2>
    <ul class="heroes">
      <li *ngFor="let employee of employees"
        [class.selected]="employee === selectedEmployee"
        (click)="onSelect(employee)">
        <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
    </ul>
    <div *ngIf="selectedEmployee">
      <h2>{{selectedEmployee.name}} details!</h2>
      <div><label>id: </label>{{selectedEmployee.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedEmployee.name" placeholder="name"/>
      </div>
    </div>`,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
    title = 'Hyphen';
    employees = EMPLOYEES;
    selectedEmployee: Employee;

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
    }
}