import { Component, Input, OnInit} from '@angular/core';
import { BlogComment } from '../blog-comment/blog-comment';

import { BlogCommentService } from '../blog-comment/blog-comment.service';;

@Component({
    moduleId: module.id,
    selector: 'app-blog-comment-list',
    templateUrl: './blog-comment-list.component.html',
    styleUrls: ['./blog-comment-list.component.css']
})
export class BlogCommentListComponent implements OnInit{
    @Input() blogId: number;

    comments: BlogComment[];

    constructor(private commentService: BlogCommentService){}

    ngOnInit(): void {
        if(this.blogId)
        {
            this.commentService.getBlogCommentsByBlogId(this.blogId)
                .then(comments => this.comments = comments);
        }
    }
}