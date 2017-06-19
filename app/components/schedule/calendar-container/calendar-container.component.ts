import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { CalendarDay } from '../schedule.types';

@Component({
    moduleId: module.id,
    selector: 'app-calendar-container',
    templateUrl: './calendar-container.component.html',
    styleUrls: ['./calendar-container.component.css']
})
export class CalendarContainerComponent {
    viewTypeList  = [
        {id: 1, name: "Monthly"},
        {id: 2, name: "Weekly"}
    ];

    viewType: string = "1";
    calendarDates: CalendarDay[] = [];
    currentDay: Date;
    constructor(){
        //get the current year
        this.currentDay = new Date();
        this.renderCalender();
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {

    }

    onChangeViewType($event: any): void {
        console.log('change');
        this.renderCalender();
    } 

    back(): void {
        console.log('back');
    }

    forward(): void {
        console.log('forward');
    }

    renderCalender(): void {
        switch(this.viewType)
        {
            case "1":
                //create month
                console.log('render month');
                let numberOfDays: number = new Date(this.currentDay.getFullYear(), this.currentDay.getMonth(), 0).getDate();
                for(let x = 1; x <= numberOfDays; x++)
                {
                    this.calendarDates.push(new CalendarDay(new Date(this.currentDay.getFullYear(), this.currentDay.getMonth(), x)));
                }
            break;
        }
    }
}

