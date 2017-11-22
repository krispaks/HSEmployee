import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as LDClient from 'ldclient-js';
//import * as LDClient from 'ldclient-node';
//var LDClient = require('ldclient-node');

@Injectable()
export class LaunchDarklyService {
    private ldClient: any;
    private flags: any;
    public flagChange: Subject<Object> = new Subject<Object>();

    constructor()
    {
        this.flags = {'chat-feature': false};
        var user = {key: 'krispaks@yahoo.com'};
        this.ldClient = LDClient.initialize('5a0da70bdc4d9c0ac747a3c6', user);
         
        this.ldClient.on('change', (flags) => {
            if(flags['chat-feature'] !== undefined){
                this.flags['chat-feature'] = flags['chat-feature'];
            }

            this.flagChange.next(this.flags);
            console.log('Flags updated');
        });

        this.ldClient.on('ready', () => {
            this.setFlags();
        });
    }

    setFlags(): void {
        this.flags = this.ldClient.allFlags();
        console.log('Flags initialized');
    }
}