import { NgModule, Optional, ModuleWithProviders, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService, UserServiceConfig } from './user/user.service';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { UserBoxComponent } from './user-box/user-box.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TitleComponent,
        LoginComponent,
        UserBoxComponent
    ],
    exports: [
        TitleComponent,
        LoginComponent,
        UserBoxComponent
    ],
    providers: [
        UserService
    ]
})

export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
            'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config: UserServiceConfig) : ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        }
    }
}