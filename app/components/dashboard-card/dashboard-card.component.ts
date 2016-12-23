import { Component, Input } from '@angular/core';
import { DashboardCard } from './dashboard-card';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard-card',
    templateUrl: './dashboard-card.component.html',
    styleUrls: ['./dashboard-card.component.css']
})

export class DashboardCardComponent
{
    @Input() Data: DashboardCard;
    constructor(){
    }
}