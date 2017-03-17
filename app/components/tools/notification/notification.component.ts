import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Registration } from './notification.models';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'app-notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {

    regs : Observable<Registration[]>;

    constructor(private service: NotificationService){ }

    ngOnInit(): void {
       this.regs = this.service.getRegistrations();
    }
}

