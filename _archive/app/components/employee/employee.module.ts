import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';

import { EmployeeComponent } from './employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

import { EmployeeService } from './employee.service';
import { DashboardService } from './dashboard/dashboard.service';
import { ContactService } from './contact/contact.service';

import { fakeBackendProvider } from '../in-memory-api/fake-backend-provider';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { employeeList, selectedEmployee } from './reducer/employee-list.reducer'


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        EmployeeRoutingModule,
        SharedModule,
        MaterialModule,
        StoreModule.provideStore({employeeList, selectedEmployee})
    ],
    declarations:[
        EmployeeComponent,
        DashboardComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        EmployeeSearchComponent,
        DashboardCardComponent,
        ContactComponent,
        EmployeeCardComponent
    ],
    providers: [
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        EmployeeService,
        DashboardService,
        ContactService
    ]
})

export class EmployeeModule {}