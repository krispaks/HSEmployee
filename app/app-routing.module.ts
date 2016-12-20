import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    { path: 'schedule', loadChildren: 'app/components/schedule/schedule.module#ScheduleModule' },
    { path: 'blog', loadChildren: 'app/components/blog/blog.module#BlogModule' }
];

@NgModule({
    imports: [  RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}