export class Action  {
    public type: any;
    public payload: any;
};

export const employeeList = (state: any = [], action: Action ) => {
    switch(action.type) {
        case 'ADD_EMPLOYEE_LIST':
            return action.payload;
        default:
            return state;
    }
};
