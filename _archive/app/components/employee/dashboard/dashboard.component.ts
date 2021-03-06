import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { DashboardCard, DashboardCardDataItem } from '../dashboard-card/dashboard-card';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    employees: Employee[] = [];

    newsCard: DashboardCard;
    blogCard: DashboardCard;
    empSchedCard: DashboardCard;

    constructor(private dashboardService: DashboardService){ }

    ngOnInit(): void {
        /*this.employeeService.getEmployees()
            .then(employees => this.employees = employees.slice(1,5));*/

        this.newsCard = {
            Title: "Company News",
            DataList: [
                { Id: 1, Name: "SupplyPro v20 released" },
                { Id: 2, Name: "SupplyPro Map Feature included in V20"}
            ],
            Icon: "tv"
        };

        this.blogCard = {
            Title: "HS Blogs",
            DataList: [
                { Id: 1, Name: "How to Create Angular Components" },
                { Id: 2, Name: "How to Remove classic ASP"}
            ],
            Icon: "adjust"
        };

        this.empSchedCard = {
            Title: "Employee Schedule",
            DataList: [
                { Id: 1, Name: "Khris is gonna be on Vacation Next week" },
                { Id: 2, Name: "Someone is gonna be sick tomorrow"}
            ],
            Icon: "access_time"
        };
    }
}

