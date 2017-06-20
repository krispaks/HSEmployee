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
    id: number;
    date: Date;
    name: string;
    constructor(id: number, name: string, date: Date){
        this.id = id;
        this.name = name;
        this.date = date;
    }
}