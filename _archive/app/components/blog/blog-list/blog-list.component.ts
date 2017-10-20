import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
    moduleId: module.id,
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit {

    blogs: Blog[];

    constructor(private blogService: BlogService){

    }

    ngOnInit(): void{
        this.getBlogs()
    }

    getBlogs(): void{
        this.blogService.getBlogs()
            .then(blogs => this.blogs = blogs);
    }
}