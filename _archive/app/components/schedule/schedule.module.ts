import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ScheduleRoutingModule } from './schedule-routing.module';

import { ScheduleComponent } from './schedule.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { CalendarDateComponent } from './calendar-date/calendar-date.component';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';

import { ScheduleService } from './schedule.service';

@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        ScheduleRoutingModule
    ],
    declarations:[
        ScheduleComponent,
        CalendarContainerComponent,
        CalendarDateComponent,
        ScheduleItemComponent
    ],
    providers:[
        ScheduleService
    ]
})

export class ScheduleModule {
    constructor(){
    }
}