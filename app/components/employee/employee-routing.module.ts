import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component'; 
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

const routes: Routes = [
    {
        path: '', component: EmployeeComponent
    },
    {
        path: 'employees', component: EmployeeListComponent
    },
    {
        path: 'detail/:id', component: EmployeeDetailComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class EmployeeRoutingModule {}