import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';


import { BlogComponent } from './blog.component';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { BlogListItemComponent } from '../blog-list-item/blog-list-item.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';

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
        BlogDetailComponent
    ],
    providers:[
        BlogService
    ]
})

export class BlogModule {}