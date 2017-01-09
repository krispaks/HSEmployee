import { NgModule, Optional, ModuleWithProviders, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserService, UserServiceConfig } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { StorageService } from './storage/storage.service';

import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        TitleComponent,
        LoginComponent
    ],
    exports: [
        TitleComponent,
        LoginComponent
    ],
    providers: [
        UserService,
        AuthService,
        StorageService
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