import { NgModule, Optional, ModuleWithProviders, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { UserService, UserServiceConfig } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { StorageService } from './storage/storage.service';

import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { UserBoxComponent } from './user-box/user-box.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        TitleComponent,
        LoginComponent,
        TopNavComponent,
        UserBoxComponent
    ],
    exports: [
        TitleComponent,
        LoginComponent,
        TopNavComponent,
        UserBoxComponent
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