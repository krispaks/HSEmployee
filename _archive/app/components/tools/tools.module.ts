import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ToolsComponent } from './tools.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';

@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        ToolsRoutingModule
    ],
    declarations:[
        ToolsComponent,
        NotificationComponent
    ],
    providers:[
        NotificationService
    ]
})

export class ToolsModule {}