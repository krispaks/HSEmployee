import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-detail/employee';
import { EmployeeService } from '../employee-detail/employee.service';

import { DashboardCardData } from '../dashboard-card/dashboard-card.component';


@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    employees: Employee[] = [];

    newsTitle: string = "Company News";
    companynews: DashboardCardData[] = [
        { Id: 1, Name: "SupplyPro v20 released" },
        { Id: 2, Name: "SupplyPro Map Feature included in V20"}
    ];   

    constructor(private employeeService: EmployeeService){ }

    ngOnInit(): void {
        this.employeeService.getEmployees()
            .then(employees => this.employees = employees.slice(1,5));
    }
}