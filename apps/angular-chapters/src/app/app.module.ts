import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ChapterOneModule } from "@angular-chapters/chapter-one";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { routerReducer } from "@ngrx/router-store";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    StoreModule.forRoot({router: routerReducer}),
    EffectsModule.forRoot([]),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreDevtoolsModule.instrument({connectInZone: true}),
    ChapterOneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
