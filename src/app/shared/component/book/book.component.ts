import { Component, OnInit, Input } from '@angular/core';
import { BooksModel } from '../../_models/book';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() addedbooks: BooksModel.Book = {} as BooksModel.Book;
  @Input() type: string;
  favChecker = true;
  searchText = '';

  constructor(private userService: UserService) { }

  ngOnInit() {}

  addFavourites(favourites) {
      this.favChecker = false;
      favourites.isFav = true;
      this.userService.addFavourites(favourites);
  }

  delete(id: string) {
    this.userService.delete(id);
  }

  removeFavourites(id: string) {
    this.favChecker = false;
    this.userService.removeFavourites(id);
  }

}
