import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { EmployeeService } from './components/employee-detail/employee.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        EmployeeDetailComponent,
        EmployeeListComponent
    ],
    providers: [
        EmployeeService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}