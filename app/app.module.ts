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
import { ContactComponent } from './components/contact/contact.component';

import { EmployeeService } from './components/employee-detail/employee.service';
import { ContactService } from './components/contact/contact.service';
import { UserService } from './components/shared/user/user.service';

import { HighlightDirective } from './components/shared/highlight/highlight.directive';
import { AwesomePipe } from './components/contact/awesome.pipe'; 


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
        EmployeeSearchComponent,
        ContactComponent,
        AwesomePipe
    ],
    providers: [
        EmployeeService,
        UserService,
        ContactService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}