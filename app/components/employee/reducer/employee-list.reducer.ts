/*export class Action  {
    public type: any;
    public payload: any;
};*/

import { Action } from '@ngrx/store';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export const employeeList = (state: any = [], action: Action ) => {
    switch(action.type) {
        case ADD_EMPLOYEE:
            return action.payload;
        default:
            return state;
    }
};

export const SELECT_EMPLOYEE = 'SELECT_EMPLOYEE';

export const selectedEmployee = (state: any = null , action: Action) => {
    switch(action.type)
    {
        case SELECT_EMPLOYEE:
            return action.payload;
        default:
            return state;
    }
}
