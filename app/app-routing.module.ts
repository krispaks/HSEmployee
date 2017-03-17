import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/core/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'employee', loadChildren: 'app/components/employee/employee.module#EmployeeModule' },
    { path: 'schedule', loadChildren: 'app/components/schedule/schedule.module#ScheduleModule' },
    { path: 'blog', loadChildren: 'app/components/blog/blog.module#BlogModule' },
    { path: 'tools', loadChildren: 'app/components/tools/tools.module#ToolsModule' }
];

@NgModule({
    imports: [  RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}