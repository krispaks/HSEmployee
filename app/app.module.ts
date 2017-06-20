import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { NoopAnimationPlayer} from '@angular/animations';
//import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { CoreModule } from './components/core/core.module';

import { AppRoutingModule } from './app-routing.module';
//import './rxjs-extensions';


// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './components/in-memory-api/in-memory-data.service';

import { fakeBackendProvider } from './components/in-memory-api/fake-backend-provider';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        //NoopAnimationPlayer,
        //FormsModule,
        AppRoutingModule,
        //InMemoryWebApiModule.forRoot(InMemoryDataService),
        CoreModule,
        MaterialModule
    ],
    declarations: [ AppComponent ],
    providers: [ fakeBackendProvider
        , MockBackend
        , BaseRequestOptions
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}