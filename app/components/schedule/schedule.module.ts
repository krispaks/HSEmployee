import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ScheduleRoutingModule } from './schedule-routing.module';

import { ScheduleComponent } from './schedule.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { CalendarDateComponent } from './calendar-date/calendar-date.component';

@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        ScheduleRoutingModule
    ],
    declarations:[
        ScheduleComponent,
        CalendarContainerComponent,
        CalendarDateComponent
    ],
    providers:[]
})

export class ScheduleModule {}