import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
    username = '';
}

@Injectable()
export class UserService {

    username = 'krispaks';

    constructor(@Optional() config: UserServiceConfig){
        if(config) { 
            this.username = config.username
        }
    }
}

