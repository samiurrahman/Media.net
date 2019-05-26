import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [
    { path: '', component: AddbookComponent },
    { path: 'addbook', component: AddbookComponent },
    { path: 'books', component: BooksComponent },
    { path: 'favourites', component: FavouritesComponent },
    { path: 'notfound', component: NotfoundComponent },
   // { path: '', loadChildren: './home/home.module#HomeModule' },
    //{ path: '', loadChildren: './user/user.module#UserModule'},

    // otherwise redirect to home
    { path: '**', redirectTo: '/notfound' }
];

export const routing = RouterModule.forRoot(appRoutes);

