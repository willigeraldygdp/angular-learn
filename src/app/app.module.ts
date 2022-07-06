import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService } from './in-memory-data.service'
import {counterReducer} from "./counter/counter.reducer";
import {CounterComponent} from "./counter/counter.component";
import {bookReducer} from "./book/book.reducer";
import {collectionReducer} from "./book/collection.reducer";
import {BookComponent} from "./book/book.component";
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookCollectionComponent} from "./book/book-collection/book-collection.component";
import {GoogleBooksService} from "./book/book.service";
import { metaReducers, reducers } from './app.reducer';
import {CounterModule} from "./counter/counter.module";
import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    BookComponent,
    BookListComponent,
    BookCollectionComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
      StoreModule.forFeature( 'books', bookReducer ),
      StoreModule.forFeature('collection', collectionReducer)
    ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
