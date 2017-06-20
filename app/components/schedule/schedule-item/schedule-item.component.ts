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
    @Output() onScheduleItemDrop = new EventEmitter();
    dragging: boolean = false;
    constructor(){
    }

    onDrag($event: any): void {
        console.log('item - onDrag');
        this.dragging = true;
    }
    
    onDropEnd($event: any): void {
        console.log('item - onDropEnd');
        this.dragging = false;
        this.onScheduleItemDropEnd.emit();
    }
    onDragStart($event: DragEvent): void {
        console.log('item - onDragStart');
        $event.dataTransfer.setData('scheduleEntry', JSON.stringify(this.scheduleEntry));
        $event.dataTransfer.dropEffect = 'move';
    }
}

