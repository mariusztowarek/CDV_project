import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { ApiarticlesService } from './services/apiarticles.service';


import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListComponent } from './components/top/list/list.component';
import { IndexComponent } from './components/index/index.component';
import { ContctComponent } from './components/contct/contct.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ErrorComponent } from './components/error/error.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes  = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'contact',
    component: ContctComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    // redirectTo: ''
  },
  {
    path: '**',
    component: ErrorComponent,
    // redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    IndexComponent,
    ContctComponent,
    ArticlesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, ApiarticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
