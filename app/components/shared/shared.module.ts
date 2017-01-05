import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AwesomePipe } from './awesome/awesome.pipe';
import { HighlightDirective } from './highlight/highlight.directive';

import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AwesomePipe, HighlightDirective,
        CommonModule, FormsModule,
        TopNavComponent
    ],
    declarations: [
        AwesomePipe,
        HighlightDirective,
        TopNavComponent
    ]
})

export class SharedModule {}