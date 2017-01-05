import { Component, Input } from '@angular/core';
import { User } from '../user/user';

@Component({
    moduleId: module.id,
    selector: 'app-user-box',
    styleUrls: ['user-box.component.css'],
    templateUrl: './user-box.component.html'
})

export class UserBoxComponent {
    @Input() user: User;
    constructor(){}
}