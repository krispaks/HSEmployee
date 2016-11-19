import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'employees',
        component: EmployeeListComponent
    },
    {
        path: 'detail/:id',
        component: EmployeeDetailComponent
    },
    /*{
        path: 'contact',
        redirectTo: '/contact',
        pathMatch: 'full'
    }*/
    {
        path: 'contact',
        loadChildren: 'app/components/contact/contact.module#ContactModule'
    }
];

@NgModule({
    imports: [  RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}