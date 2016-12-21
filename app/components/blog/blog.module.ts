import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';

@NgModule({
    imports:[
        CommonModule,
        BlogRoutingModule
    ],
    declarations:[
        BlogComponent
    ],
    providers:[]
})

export class BlogModule {}