import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth/auth.service';
import { StorageService } from './storage/storage.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [
      AuthService,
      StorageService
  ]
})
export class CoreModule { 
    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        if(parentModule){
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
