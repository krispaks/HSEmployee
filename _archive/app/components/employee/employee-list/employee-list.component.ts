import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeeListComponent implements OnInit {
    //employees: Employee[];
    employees: Observable<Array<Employee>>;
    selectedEmployee: Employee;
    searchCritera = new Subject<string>();

    constructor(
        private router: Router, 
        private employeeService: EmployeeService){}

    ngOnInit(): void{        
      this.employees = this.employeeService.employees;
      this.employeeService.selectedEmployee
            .subscribe(employee => this.selectedEmployee = employee);
      this.employeeService.getEmployees();

      this.searchCritera
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(criteria => {
                this.employeeService.getSearchEmployees(criteria);
            });
    }

    onSelect(employee: Employee): void {
        this.employeeService.setSelectedEmployee(employee);
    }

    getEmployees(): void {
        /*this.employeeService.employees
            .subscribe(employees => this.employees = employees);*/
    }

    gotoDetail(): void {
        this.router.navigate(['employee/detail', this.selectedEmployee.id]);
    }

    add(name: string): void {
        name = name.trim();
        if(!name) { return; }
        this.employeeService.create(name)
            .then(employee => {
                //this.employees.push(employee);
                //this.selectedEmployee = null;
            });
    }

    delete(employee: Employee): void {
        this.employeeService
            .delete(employee.id)
            .then(() => {
                //this.employees = this.employees.filter(h => h !== employee);
                //if(this.selectedEmployee === employee) { this.selectedEmployee = null; }
            });
    }

    search(criteria: string): void
    {
        this.searchCritera.next(criteria);
    }
}