import { Component, Input, OnInit} from '@angular/core';

import { BlogCommentService } from './blog-comment.service';
import { BlogComment } from './blog-comment';

@Component({
    moduleId: module.id,
    selector: 'app-blog-comment',
    templateUrl: './blog-comment.component.html',
    styleUrls: ['./blog-comment.component.css']
})
export class BlogCommentComponent implements OnInit{
    @Input() comment: BlogComment;

    comments: BlogComment[];

    constructor(private commentService: BlogCommentService){}

    ngOnInit(): void {
       
    }
}