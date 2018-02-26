import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { ListActiveDirective } from './list-active.directive';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListActiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
