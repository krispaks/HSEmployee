import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
//import { BlogModule } from './blog/blog.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
//import { ScheduleModule } from './schedule/schedule.module';

import { MockBackendService } from './in-memory-api/mock-backend-service';
//import { MockBackend } from '@angular/http/testing';

import { environment } from '../environments/environment';

let providers = [];

if(environment.useMockBackend){
    providers.push({
        provide: HTTP_INTERCEPTORS,
        useClass: MockBackendService,
        multi: true
    });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //BlogModule,
    CoreModule,
    AppRoutingModule,
    //ScheduleModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})

export class AppModule { 
    constructor(router: Router){
        console.log('Routes: ' + JSON.stringify(router.config, undefined, 2));
    }
}
