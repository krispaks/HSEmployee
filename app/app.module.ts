import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 

import { CoreModule } from './components/core/core.module';
import { EmployeeModule } from './components/employee/employee.module';

import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEmployeeDataService, InMemoryBlogDataService } from './components/in-memory-api/in-memory-data.service';


import { AppComponent } from './app.component';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryEmployeeDataService),
        InMemoryWebApiModule.forRoot(InMemoryBlogDataService),
        CoreModule,
        EmployeeModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}