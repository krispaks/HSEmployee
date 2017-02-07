import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {

    constructor(private router: Router){}

    private navigateTo(route: string): void{
        this.router.navigate(['employee/' + route]);
    }
}