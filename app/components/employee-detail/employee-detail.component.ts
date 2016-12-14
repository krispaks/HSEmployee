import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { Employee } from '../employee/employee';
import { EmployeeService } from './employee.service';

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {
    
    employee: Employee;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
            .subscribe(employee => this.employee = employee)
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.employeeService.update(this.employee)
            .then(() => this.goBack());
    }
}