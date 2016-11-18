import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { HiglightDirective } from './highlight.directive';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ContactComponent, HiglightDirective, AwesomePipe ],
    exports: [ ContactComponent ],
    providers: [ ContactService ]
})

export class ContactModule {}