import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let BLOG_LIST = [
            { id: 1, title: 'Angular is Cool', post: 'The quick brown fox jumps over the lazy dog', author: 'Google', postedDate: new Date('12/20/2013')},
            { id: 2, title: 'React is Cooler', post: 'The quick brown fox jumps over the lazy dog', author: 'Facebook', postedDate: new Date('12/20/2013')},
            { id: 3, title: 'MVC is Coolest?', post: 'The quick brown fox jumps over the lazy dog', author: 'Microsoft', postedDate: new Date('12/20/2013')}
        ];

export let fakeBackendProvider = {
    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        let employees = [
            { id: 1, name: 'Khris Paca', position: 'Developer', image: 'angular.png', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris.' },
            { id: 2, name: 'Rick Donaldson', position: 'Team Lead', image: 'aurelia.jpg', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris.' },
            { id: 3, name: 'Carl Tu', position: 'Senior Developer', image: 'react.svg', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.' },
            { id: 4, name: 'Doug Ware', position: 'Developer', image: 'aurelia.jpg', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.' },
            { id: 5, name: 'Chase Martin', position: 'Developer', image: 'aurelia.jpg', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris.' },
            { id: 6, name: 'Scott Yoon', position: 'Team Lead', image: 'angular.png', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
            { id: 7, name: 'David Bailey', position: 'Developer', image: 'aurelia.jpg', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.' },
            { id: 8, name: 'Dagny Jewell', position: 'Business', image: 'react.svg', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.' },
            { id: 9, name: 'Aldwin Barlis', position: 'Infrastructure', image: 'react.svg', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauri.' },
            { id: 10, name: 'Leo Wolur', position: 'QA', image: 'aurelia.jpg', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.' },
            { id: 11, name: 'Chris Sugg', position: 'CIO', image: 'angular.png', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ' },
        ];

        let blogs = BLOG_LIST;

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
        ];;

        let users = [
            { id: 1, username: 'kpaca', password: 'password' },
            { id: 2, username: 'rdonaldson', password: 'password' },
            { id: 3, username: 'ctu', password: 'password' }
        ];

        let userPermissions = [
            { id: 1, userId: 1, canViewEmployee: true, canViewCalendar: true, canViewBlog: true },
            { id: 2, userId: 2, canViewEmployee: true, canViewCalendar: true, canViewBlog: false },
            { id: 3, userId: 3, canViewEmployee: true, canViewCalendar: false, canViewBlog: true }
        ];

        backend.connections.subscribe((connection: MockConnection) => {
            setTimeout(() => {

                // authenticate
                if(connection.request.url.endsWith('/api/authenticate') 
                    && connection.request.method === RequestMethod.Post)
                {
                    let params = JSON.parse(connection.request.getBody());
                    let credential = {
                        username: params.username,
                        password: params.password
                    };
                    // mock identity code

                    let user = users.find((item, index, obj) => {
                       if(item.username === credential.username && item.password === credential.password){
                           return true;
                       }
                    });

                    if(user){
                        // return ok response with mock jwt
                        connection.mockRespond(new Response(
                            new ResponseOptions({
                                status: 200,
                                body: {
                                    token: 'fake-jwt-token'
                                }
                            })
                        ));
                    }
                    else
                    {
                        // return ok without jwt
                        connection.mockRespond(new Response(
                            new ResponseOptions({
                                status: 200
                            })
                        ));
                    }
                }

                //get all employees
                if(connection.request.url.endsWith('/api/employees') 
                    && connection.request.method === RequestMethod.Get){
                    
                    if(connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token'){
                        connection.mockRespond(new Response(
                            new ResponseOptions({
                                status: 200,
                                body: employees
                            })
                        ));
                    }
                    else{
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 401 })
                        ));
                    }
                }

                if(connection.request.url.includes('/api/employees/?name=') 
                    && connection.request.method === RequestMethod.Get){

                    if(connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token'){
                        let arr = connection.request.url.split('/');
                        let search = arr[3].split('=');
                        let result = employees.filter((item)=> { 
                            return item.name.toLowerCase().includes(search[1].toLowerCase());
                        });
                        connection.mockRespond(new Response(
                            new ResponseOptions({
                                status: 200,
                                body: result})
                        ));
                    }
                    else{
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 401 })
                        ));
                    }
                }

                if(connection.request.url.includes('/api/blogs') 
                    && connection.request.method === RequestMethod.Get){

                    if(connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token'){
                       
                        connection.mockRespond(new Response(
                            new ResponseOptions({
                                status: 200,
                                body: blogs})
                        ));
                    }
                    else{
                        connection.mockRespond(new Response(
                            new ResponseOptions({ status: 401 })
                        ));
                    }
                }


            }, 500);
        })

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
}