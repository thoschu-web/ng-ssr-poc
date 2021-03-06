import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstModule } from '@ng-ssr-poc/first';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
