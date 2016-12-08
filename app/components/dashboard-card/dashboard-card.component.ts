import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-card',
    templateUrl: './dashboard-card.component.html',
    styleUrls: ['./dashboard-card.component.css']
})

export class DashboardCardComponent
{
    @Input() Title: string = 'Card Title';
    @Input() Data: DashboardCardData[] = [];
    constructor(){

    }
}

export class DashboardCardData
{
    Id: number;
    Name: string;
}