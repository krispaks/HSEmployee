import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ScheduleEntry, CalendarDay } from '../schedule.types';

@Component({
    moduleId: module.id,
    selector: 'app-calendar-date',
    templateUrl: './calendar-date.component.html',
    styleUrls: ['./calendar-date.component.css']
})
export class CalendarDateComponent {
    @Input() calDay: CalendarDay;
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
        console.log(this.calDay.currentDate.toDateString() + " - end target updating");
        console.log('onDrop');
    }
    onScheduleItemDropEndHandler($event: any): void {
        console.log('start div notified');
        console.log(this.calDay.currentDate.toDateString() + " - start div updating");
    }
}

