import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

import { BlogRootComponent } from './blog/blog-root/blog-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'blog', component: BlogRootComponent},
    /*{ path: 'blog', loadChildren: 'blog/blog.module#BlogModule' }
    { path: 'employee', loadChildren: 'app/components/employee/employee.module#EmployeeModule' },
    { path: 'schedule', loadChildren: 'app/components/schedule/schedule.module#ScheduleModule' },
    { path: 'tools', loadChildren: 'app/components/tools/tools.module#ToolsModule' }*/
];

@NgModule({
    imports: [  RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}