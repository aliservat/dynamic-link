import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import {RouterLink, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {DynamicLinkDirective} from "./dynamic-link.directive";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DynamicLinkDirective,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterModule.forRoot([]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
