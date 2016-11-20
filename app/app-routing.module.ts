import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
    {
        path: 'contact',
        loadChildren: 'app/components/contact/contact.module#ContactModule'
    },
    {
        path: 'employee',
        loadChildren: 'app/components/employee/employee.module#EmployeeModule'
    }
];

@NgModule({
    imports: [  RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}