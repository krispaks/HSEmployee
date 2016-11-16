import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-detail/employee';
import { EmployeeService } from '../employee-detail/employee.service';


@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    employees: Employee[] = [];

    constructor(private employeeService: EmployeeService){ }

    ngOnInit(): void {
        this.employeeService.getEmployees()
            .then(employees => this.employees = employees.slice(1,5));
    }
}