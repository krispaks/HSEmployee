import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ScheduleEntry } from '../schedule.types';

@Component({
    moduleId: module.id,
    selector: 'app-schedule-item',
    templateUrl: './schedule-item.component.html',
    styleUrls: ['./schedule-item.component.css']
})

export class ScheduleItemComponent {
    @Input() scheduleEntry: ScheduleEntry; 
    @Output() onScheduleItemDropEnd = new EventEmitter();
    dragging: boolean = false;
    constructor(){
    }

    onDrag($event: any): void {
        this.dragging = true;
        console.log('dragging');
    }
    onDropEnd($event: any): void {
        this.dragging = false;
        this.onScheduleItemDropEnd.emit();
        console.log('drag end');
    }
}

