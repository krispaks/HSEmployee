import { Injectable, Optional } from '@angular/core';
import { User } from './user';
import { UserPermission } from '../auth/user-permission';

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

    getUser(username: string): User {
        let user: User = {
            username: 'kpaca'
        };

        return user;
    }

    getUserPermission(userId: number): UserPermission {
        return new UserPermission();
    } 
}

