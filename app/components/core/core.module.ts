import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user/user.service';
import { TitleComponent } from './title/title.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TitleComponent
    ],
    exports: [
        TitleComponent
    ],
    providers: [
        UserService
    ]
})

export class CoreModule {}