export class Schedule {
    id: number;
    name: string;
}

export class CalendarDay {
    currentDate: Date;
    constructor(date: Date)
    {
        this.currentDate = date;
    }
}

export class ScheduleEntry {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}