import { Component, Input } from '@angular/core';
import { Blog } from '../blog/blog';

@Component({
    moduleId: module.id,
    selector: 'app-blog-list-item',
    templateUrl: './blog-list-item.component.html',
    styleUrls: ['./blog-list-item.component.css']
})

export class BlogListItemComponent
{
    @Input() blog:Blog;

    constructor(){} 
}