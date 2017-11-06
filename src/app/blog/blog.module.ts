import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogCommentListComponent } from './blog-comment-list/blog-comment-list.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListItemComponent } from './blog-list-item/blog-list-item.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRootComponent } from './blog-root/blog-root.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
      //BlogRootComponent
  ],
  declarations: [
        BlogRootComponent,
        BlogCommentListComponent, 
        BlogCommentComponent, 
        BlogDetailComponent, 
        BlogListItemComponent, 
        BlogListComponent
    ]
})

export class BlogModule { }
