import { Component, Input, OnInit} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
    moduleId: module.id,
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {
    blog: Blog;

    constructor(private route: ActivatedRoute, 
                private blogService: BlogService){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.blogService.getBlog(+params['id']))
            .subscribe(blog => this.blog = blog);
    }
}
