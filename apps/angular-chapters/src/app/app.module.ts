import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ChapterOneBasicNgrxModule } from 'chapter-one-basic-ngrx';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer } from '@ngrx/router-store';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreDevtoolsModule.instrument({ connectInZone: true }),
    ChapterOneBasicNgrxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
