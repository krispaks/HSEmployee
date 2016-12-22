import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        let employees = [
            { id: 11, name: 'Khris Paca' },
            { id: 12, name: 'Rick Donaldson' },
            { id: 13, name: 'Carl Tu' },
            { id: 14, name: 'Doug Ware' },
            { id: 15, name: 'Chase Martin' },
            { id: 16, name: 'Scott Yoon' },
            { id: 17, name: 'David Bailey' },
            { id: 18, name: 'Dagny Jewell' },
            { id: 19, name: 'Aldwin Barlis' },
            { id: 20, name: 'Leo Wolur' },
            { id: 21, name: 'Chris Sugg' }
        ];

        let blogs = [
            { id: 1, title: 'Angular is Cool', post: 'The quick brown fox jumps over the lazy dog', author: 'Google', postedDate: new Date('12/20/2013')},
            { id: 2, title: 'Angular is Cooler', post: 'The quick brown fox jumps over the lazy dog', author: 'Facebook', postedDate: new Date('12/20/2013')},
            { id: 3, title: 'MVC is Coolest?', post: 'The quick brown fox jumps over the lazy dog', author: 'Microsoft', postedDate: new Date('12/20/2013')}
        ];
        return {employees, blogs};
    }
}