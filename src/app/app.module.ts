import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { AdsenseModule } from 'ng2-adsense';
// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './shared/_directives';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookComponent } from './shared/component/book/book.component';
import { UserService } from './shared/_services/user.service';
import { AlertService } from './shared/_services/alert.service';
import { FilterPipe } from './shared/pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AddbookComponent,
    BooksComponent,
    FavouritesComponent,
    NotfoundComponent,
    BookComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    FormsModule
  ],
  providers: [UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
