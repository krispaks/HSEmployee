import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome/awesome.pipe';
import { HighlightDirective } from './highlight/highlight.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        AwesomePipe, HighlightDirective,
        CommonModule, FormsModule
    ],
    declarations: [
        AwesomePipe,
        HighlightDirective
    ]
})

export class SharedModule {}