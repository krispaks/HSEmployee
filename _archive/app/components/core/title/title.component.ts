import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: './title.component.html'
})

export class TitleComponent implements OnInit {
    @Input() subtitle = '';
    @Input() title = '';
    user: User;

    constructor(){
        
    }

    ngOnInit(): void {
    }
}