import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Route[] = [

  {
    path: 'chapter-one-basic-ngrx',
    loadChildren: () => import('chapter-one-basic-ngrx').then(m => m.ChapterOneBasicNgrxModule)
  },
  {
    path: 'signals-basics',
    loadChildren: () => import('signals-basics').then(m => m.SignalsBasicsModule)
  },
  // {
  //   path: 'signals-basics',
  //   loadComponent: () => import('signals-basics').then(m => m.SignalsBasicsComponent)
  // }
];
