import { NgModule, Optional, ModuleWithProviders, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserService, UserServiceConfig } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { StorageService } from './storage/storage.service';

import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        TitleComponent,
        LoginComponent,
        TopNavComponent
    ],
    exports: [
        TitleComponent,
        LoginComponent,
        TopNavComponent
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