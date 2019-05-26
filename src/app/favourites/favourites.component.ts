import { Component, OnInit } from '@angular/core';
import { BooksModel } from '../shared/_models/book';
import { UserService } from '../shared/_services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  addedFavourites: BooksModel.Book = {} as BooksModel.Book;
  type = 'fav';

  constructor(private userService: UserService,
              private titleService: Title) {
      this.userService.booksData.subscribe(newBook => this.addedFavourites = newBook);
  }

  ngOnInit() {
    this.titleService.setTitle('BooK Portal | Favourites');
    this.addedFavourites = this.userService.getBooks();
  }
}
