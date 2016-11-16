import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees'; 

@Injectable()
export class EmployeeService {
    getEmployees(): Promise<Employee[]> {
        return Promise.resolve(EMPLOYEES);
    }
    getEmployee(id: number): Promise<Employee>{
        return this.getEmployees()
            .then(employees => employees.find(employee => employee.id === id))
    }
}