import { Component, OnInit } from '@angular/core';

import { ContactService, Contact } from './contact.service';
import { UserService } from '../core/user/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {
    contact: Contact;
    contacts: Contact[];

    msg = 'Loading Contacts';
    userName = '';

    constructor(private contactService: ContactService,
                private userService: UserService)
    {
        this.userName = userService.username;
    }

    ngOnInit(): void {
        this.contactService.getContacts()
            .then(contacts => {
                this.msg = '';
                this.contacts = contacts;
                this.contact = this.contacts[0];
            })
    }

    next(){
        let ix = 1 + this.contacts.indexOf(this.contact);
        if(ix >= this.contacts.length) { ix = 0; }
        this.contact = this.contacts[ix];
    } 

    onSubmit(){
        this.displayMessage('Saved ' + this.contact.name);
    }

    newContact(){
        this.displayMessage('New Contact');
        this.contact = {id: 42, name: ''};
        this.contacts.push(this.contact);
    }

    displayMessage(msg: string){
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
}