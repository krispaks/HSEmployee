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
        console.log('*target - onDragOver');
        $event.preventDefault();
    }
    onDrop($event: any): void {
        console.log('*target - onDrop ' + this.calDay.currentDate.toDateString() + " - end target updating");
        $event.preventDefault();

        let scheduleToBeUpdated: ScheduleEntry = JSON.parse($event.dataTransfer.getData('scheduleEntry'));

        scheduleToBeUpdated.date = this.calDay.currentDate;

        this.scheduleService.updateDaySchedule(scheduleToBeUpdated);

        setTimeout(()=> {
            this.scheduleService.getDaySchedule(this.calDay.currentDate)
                .then((schedules: ScheduleEntry[]) => this.scheduleEntry = schedules);
        }, 100);
    }
    onScheduleItemDropEndHandler($event: any): void {
        console.log('*start - onScheduleItemDropEndHandler ' + this.calDay.currentDate.toDateString() + " - start div updating");

        //update cell
        this.scheduleService.getDaySchedule(this.calDay.currentDate)
            .then((schedules: ScheduleEntry[]) => this.scheduleEntry = schedules);
    }
}

