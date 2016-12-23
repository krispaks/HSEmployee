import { Component, Input, OnInit} from '@angular/core';
import { BlogComment } from '../blog-comment/blog-comment';

import { BlogCommentService } from './blog-comment.service';;

@Component({
    moduleId: module.id,
    selector: 'app-blog-comment',
    templateUrl: './blog-comment.component.html',
    styleUrls: ['./blog-comment.component.css']
})
export class BlogCommentComponent implements OnInit{
    @Input() blogId: number;

    comments: BlogComment[];

    constructor(private commentService: BlogCommentService){}

    ngOnInit(): void {
        if(this.blogId)
        {
            this.commentService.getBlogComments(this.blogId)
                .then(comments => this.comments = comments);
        }
    }
}