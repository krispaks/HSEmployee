import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        let employees = [
            { id: 1, name: 'Khris Paca' },
            { id: 2, name: 'Rick Donaldson' },
            { id: 3, name: 'Carl Tu' },
            { id: 4, name: 'Doug Ware' },
            { id: 5, name: 'Chase Martin' },
            { id: 6, name: 'Scott Yoon' },
            { id: 7, name: 'David Bailey' },
            { id: 8, name: 'Dagny Jewell' },
            { id: 9, name: 'Aldwin Barlis' },
            { id: 10, name: 'Leo Wolur' },
            { id: 11, name: 'Chris Sugg' }
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

        let users = [
            { id: 1, username: 'kpaca' },
            { id: 2, username: 'rdonaldson' },
            { id: 3, username: 'ctu' }
        ]

        let userPermissions = [
            { id: 1, userId: 1, canViewEmployee: true, canViewCalendar: true, canViewBlog: true },
            { id: 2, userId: 2, canViewEmployee: true, canViewCalendar: true, canViewBlog: false },
            { id: 3, userId: 3, canViewEmployee: true, canViewCalendar: false, canViewBlog: true }
        ]

        return {employees, blogs, blogComments};
    }
}