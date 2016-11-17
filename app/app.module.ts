import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './components/employee-detail/in-memory-data.service';

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeSearchComponent } from './components/employee-search/employee-search.component';
import { TitleComponent } from './components/title/title.component';

import { EmployeeService } from './components/employee-detail/employee.service';

import { HighlightDirective } from './components/shared/highlight/highlight.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        HighlightDirective,
        TitleComponent,
        DashboardComponent,
        EmployeeDetailComponent,
        EmployeeListComponent,
        EmployeeSearchComponent
    ],
    providers: [
        EmployeeService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}