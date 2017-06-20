import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { CalendarDay } from '../schedule.types';
import * as moment from 'moment';
import * as underscore from 'underscore';

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
    //currentDay: Date;
    //currentMonth: Date;
    currentMoment: any;

    private debouncedLeft = underscore.debounce(()=>{
                                this.back();
                            }, 500);

    private debouncedRight = underscore.debounce(()=>{
            this.forward();
        }, 500);         

    constructor(){
        //get the current year
        //this.currentDay = new Date();
        //this.calendarDates = this.renderCalender(this.currentDay);
        //this.calendarDates = this.renderMonth(moment());
        this.currentMoment = moment();
        this.calendarDates = this.renderMonth(this.currentMoment);
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {

    }

    onChangeViewType($event: any): void {
        console.log('change');
        //this.renderCalender();
    } 

    back(): void {
        console.log('back');
        //this.currentMonth.getMonth()
        this.currentMoment = this.currentMoment.add(-1, 'months');
        this.calendarDates = this.renderMonth(this.currentMoment);
    }

    forward(): void {
        console.log('forward');
        this.currentMoment = this.currentMoment.add(1, 'months');
        this.calendarDates = this.renderMonth(this.currentMoment);
    }

    renderCalender(currentDate: Date): CalendarDay[] {
        let calendarDays: CalendarDay[] = [];
        switch(this.viewType)
        {
            case "1":
                //create month
                console.log('render month');
                //let numberOfDays: number = new Date(this.currentDay.getFullYear(), this.currentDay.getMonth(), 0).getDate();
                let numberOfDays = moment().daysInMonth();
                for(let x = 1; x < numberOfDays; x++)
                {
                    calendarDays.push(new CalendarDay(new Date(moment().year(), moment().month(), x)));
                }
                break;
        }

        return calendarDays;
    }

    renderMonth(moment: any): CalendarDay[] {
        let calendarDays: CalendarDay[] = [];
        switch(this.viewType)
        {
            case "1":
                //create month
                console.log('render month');
                //let numberOfDays: number = new Date(this.currentDay.getFullYear(), this.currentDay.getMonth(), 0).getDate();
                let numberOfDays = moment.daysInMonth();
                for(let x = 1; x < numberOfDays; x++)
                {
                    calendarDays.push(new CalendarDay(new Date(moment.year(), moment.month(), x)));
                }
                break;
        }
        return calendarDays;
    }

    onDragOverLeft($event: any): any {
        console.log('back.....');
        

        this.debouncedLeft();
        /*setTimeout(() => {
            this.back();
        }, 2000);*/
    }
    onDragOverRight($event: any): any {
        console.log('forward.....');
        

        this.debouncedRight();
        /*setTimeout(() => {
            this.forward();
        }, 2000);*/
    }
}

