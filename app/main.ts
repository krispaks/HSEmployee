
// JiT
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

if(process.env.ENV === 'production'){
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// AoT - TODO: Need to dig

// import { platformBrowser } from '@angular/platform-browser';

// import  { AppModuleNgFactory } from './app.module.ngfactory';

// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

