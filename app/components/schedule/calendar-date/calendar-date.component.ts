import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-calendar-date',
    templateUrl: './calendar-date.component.html',
    styleUrls: ['./calendar-date.component.css']
})
export class CalendarDateComponent {
    @Input() currentDate: Date;


    constructor(){

    }
}

export class Schedule {
    id: number;
    name: string;
}