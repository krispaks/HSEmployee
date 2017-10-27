import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
import { ScheduleModule } from './schedule/schedule.module';

//import { fakeBackendProvider } from './in-memory-api/fake-backend-provider';
import { MockBackend } from '@angular/http/testing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogModule,
    CoreModule,
    AppRoutingModule,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
