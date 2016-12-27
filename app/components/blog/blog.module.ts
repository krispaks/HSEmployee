import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';


import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogListItemComponent } from './blog-list-item/blog-list-item.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCommentListComponent } from './blog-comment-list/blog-comment-list.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';
import { BlogCommentService } from './blog-comment/blog-comment.service';

import { BlogService } from './blog.service';

@NgModule({
    imports:[
        CommonModule,
        BlogRoutingModule
    ],
    declarations:[
        BlogComponent,
        BlogListComponent,
        BlogListItemComponent,
        BlogDetailComponent,
        BlogCommentListComponent,
        BlogCommentComponent
    ],
    providers:[
        BlogService,
        BlogCommentService
    ]
})

export class BlogModule {}