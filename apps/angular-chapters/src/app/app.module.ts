import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ChapterOneModule } from "@angular-chapters/chapter-one";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    ChapterOneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
