import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { ScheduleEntry, CalendarDay } from '../schedule.types';
import { ScheduleService } from '../schedule.service';

@Component({
    moduleId: module.id,
    selector: 'app-calendar-date',
    templateUrl: './calendar-date.component.html',
    styleUrls: ['./calendar-date.component.css']
})
export class CalendarDateComponent {
    @Input() calDay: CalendarDay;
    scheduleEntry: ScheduleEntry[];
    

    constructor(private scheduleService: ScheduleService){}

    ngOnInit(): void {
        this.scheduleService.getDaySchedule(this.calDay.currentDate)
            .then(schedules => this.scheduleEntry = schedules);
    }

    onDragOver($event: any): void {
        console.log('onDragOver');
        $event.preventDefault();
    }
    onDrop($event: any): void {
        console.log(this.calDay.currentDate.toDateString() + " - end target updating");
        console.log('onDrop');

        let scheduleToBeUpdated: ScheduleEntry = JSON.parse($event.dataTransfer.getData('scheduleEntry'));

        scheduleToBeUpdated.date = this.calDay.currentDate;

        // not sure yet how to update this
        this.scheduleService.updateDaySchedule(scheduleToBeUpdated);

        setTimeout(()=> {
            this.scheduleService.getDaySchedule(this.calDay.currentDate)
                .then((schedules: ScheduleEntry[]) => this.scheduleEntry = schedules);
        }, 500);
    }
    onScheduleItemDropEndHandler($event: any): void {
        console.log('start div notified');
        console.log(this.calDay.currentDate.toDateString() + " - start div updating");

        //update cell
        this.scheduleService.getDaySchedule(this.calDay.currentDate)
            .then(schedules => this.scheduleEntry = schedules);
    }
}

