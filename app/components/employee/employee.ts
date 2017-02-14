export class Employee {
    id: number;
    name: string;
}

export interface EmployeeStore {
    employees: Employee[];
}