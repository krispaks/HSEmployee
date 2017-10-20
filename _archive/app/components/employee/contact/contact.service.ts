import { Injectable } from '@angular/core';

export class Contact {
    constructor(public id: number, public name: string) {}
}

const CONTACTS: Contact[] = [
    new Contact(21, 'Madison Bumgarner'),
    new Contact(22, 'Johnny Cueto'),
    new Contact(23, 'Jake Arrieta')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {
    getContacts(): Promise<Contact[]> {
        return new Promise<Contact[]>(resolve => {
            setTimeout(() => {
                resolve(CONTACTS)
            }, FETCH_LATENCY);
        });
    }

    getContac(id: number): Promise<Contact> {
        return this.getContacts()
            .then(employees => employees.find(employee => employee.id === +id));
    }
}

