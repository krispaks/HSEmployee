export class Employee {
    id: number;
    name: string;
    position: string;
    image: string;
    shortDesc: string;
}

export interface EmployeeStore {
    employees: Employee[];
}