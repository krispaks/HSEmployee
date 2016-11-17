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

    add(name: string): void {
        name = name.trim();
        if(!name) { return; }
        this.employeeService.create(name)
            .then(employee => {
                this.employees.push(employee);
                this.selectedEmployee = null;
            });
    }

    delete(employee: Employee): void {
        this.employeeService
            .delete(employee.id)
            .then(() => {
                this.employees = this.employees.filter(h => h !== employee);
                if(this.selectedEmployee === employee) { this.selectedEmployee = null; }
            });
    }
}