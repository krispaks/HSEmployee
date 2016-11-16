import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        EmployeeDetailComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}