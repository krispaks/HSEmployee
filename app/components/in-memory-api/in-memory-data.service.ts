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
            { id: 2, title: 'React is Cooler', post: 'The quick brown fox jumps over the lazy dog', author: 'Facebook', postedDate: new Date('12/20/2013')},
            { id: 3, title: 'MVC is Coolest?', post: 'The quick brown fox jumps over the lazy dog', author: 'Microsoft', postedDate: new Date('12/20/2013')}
        ];

        let blogComments = [
            { id: 1, blogId: 1, commentPost: 'I dont like Angular', commentBy: 'reactFanboy', commentDate: new Date('12/20/2013')},
            { id: 2, blogId: 1, commentPost: 'I eat and drink Angular', commentBy: 'ngFanatic', commentDate: new Date('12/20/2013')},
            { id: 3, blogId: 1, commentPost: 'Angular? ugghhh', commentBy: 'iEguy', commentDate: new Date('12/20/2013')},
            { id: 4, blogId: 2, commentPost: 'React Rocks', commentBy: 'reactFanboy', commentDate: new Date('12/20/2013')},
            { id: 5, blogId: 2, commentPost: 'React is only V', commentBy: 'ngFanatic', commentDate: new Date('12/20/2013')},
            { id: 6, blogId: 2, commentPost: 'V is part of MVC', commentBy: 'iEguy', commentDate: new Date('12/20/2013')},
            { id: 7, blogId: 3, commentPost: 'Where am I?', commentBy: 'reactFanboy', commentDate: new Date('12/20/2013')},
            { id: 8, blogId: 3, commentPost: 'is it 2010?', commentBy: 'ngFanatic', commentDate: new Date('12/20/2013')},
            { id: 9, blogId: 3, commentPost: 'i love microsoft', commentBy: 'iEguy', commentDate: new Date('12/20/2013')},
        ];

        return {employees, blogs, blogComments};
    }
}