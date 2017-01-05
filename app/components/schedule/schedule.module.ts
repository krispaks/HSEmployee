import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ScheduleRoutingModule } from './schedule-routing.module';

import { ScheduleComponent } from './schedule.component';

@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        ScheduleRoutingModule
    ],
    declarations:[
        ScheduleComponent
    ],
    providers:[]
})

export class ScheduleModule {}