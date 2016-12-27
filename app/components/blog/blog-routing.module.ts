import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [{
    path: ''
    , component: BlogComponent 
    , children: [
        {
            path: '', redirectTo: 'blogs', pathMatch: 'full'
        },
        {
            path: 'blogs', component: BlogListComponent
        },
        {
            path: 'detail/:id', component: BlogDetailComponent 
        }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class BlogRoutingModule {}