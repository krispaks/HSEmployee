import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee-detail/employee';
import { EmployeeService } from '../employee-detail/employee.service';

@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
    employees: Employee[];
    selectedEmployee: Employee;

    constructor(
        private router: Router, 
        private employeeService: EmployeeService){}

    ngOnInit(): void{
      this.getEmployees();
    }

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
    }

    getEmployees(): void {
        this.employeeService.getEmployees()
            .then(employees => this.employees = employees);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedEmployee.id]);
    }
}