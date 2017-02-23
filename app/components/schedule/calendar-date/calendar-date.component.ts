import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ScheduleEntry } from '../schedule-item/scheduleEntry';

@Component({
    moduleId: module.id,
    selector: 'app-calendar-date',
    templateUrl: './calendar-date.component.html',
    styleUrls: ['./calendar-date.component.css']
})
export class CalendarDateComponent {
    @Input() currentDate: Date;
    scheduleEntry: ScheduleEntry[];
    

    constructor(){
        this.scheduleEntry = [
            new ScheduleEntry("Roger Federer"),
            new ScheduleEntry("Rafael Nadal"),
            new ScheduleEntry("Novak Djokovic"),
        ]
    }

    onDragOver($event: any): void {
        console.log('onDragOver');
        $event.preventDefault();
    }
    onDrop($event: any): void {
        console.log('onDrop');
    }
}

export class Schedule {
    id: number;
    name: string;
}