import { Component, Input } from '@angular/core';
import { ScheduleEntry } from './scheduleEntry';

@Component({
    moduleId: module.id,
    selector: 'app-schedule-item',
    templateUrl: './schedule-item.component.html',
    styleUrls: ['./schedule-item.component.css']
})

export class ScheduleItemComponent {
    @Input() scheduleEntry: ScheduleEntry; 
    dragging: boolean = false;
    constructor(){
    }

    onDrag($event: any): void {
        this.dragging = true;
        console.log('dragging');
    }
    onDropEnd($event: any): void {
        this.dragging = false;
        console.log('drag end');
    }
}

