import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolsComponent } from './tools.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
{
    path: '', component: ToolsComponent
    , children: [
        {
            path: '', redirectTo: 'notification', pathMatch: 'full'
        },
        {
            path: 'notification', component: NotificationComponent
        }
    ]
}];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ToolsRoutingModule {}