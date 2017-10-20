import { Component, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
    moduleId: module.id,
    selector: 'app-employee-card',
    templateUrl: './employee-card.component.html',
    styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
    @Input() employee: Employee;
    constructor(){}
}