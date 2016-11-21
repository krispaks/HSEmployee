import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 

import { ContactModule } from './components/contact/contact.module';

import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './components/employee-detail/in-memory-data.service';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';

import { UserService } from './components/shared/user/user.service';

import { HighlightDirective } from './components/shared/highlight/highlight.directive';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        ContactModule
    ],
    declarations: [
        AppComponent,
        HighlightDirective,
        TitleComponent
    ],
    providers: [
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}