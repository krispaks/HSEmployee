import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeComponent } from './employee.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeSearchComponent } from '../employee-search/employee-search.component';

import { EmployeeService } from '../employee-detail/employee.service';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        EmployeeRoutingModule
    ],
    declarations:[
        EmployeeComponent,
        DashboardComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        EmployeeSearchComponent
    ],
    providers: [
        EmployeeService
    ]
})

export class EmployeeModule {}