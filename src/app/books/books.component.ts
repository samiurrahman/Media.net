import { Subject, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BooksModel } from '../shared/_models/book';
import { UserService } from '../shared/_services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  addedbooks: BooksModel.Book = {} as BooksModel.Book;
  type = 'books';

  constructor(private userService: UserService,
              private titleService: Title) {
        this.userService.booksData.subscribe(newBook => this.addedbooks = newBook);
  }

  ngOnInit() {
    this.titleService.setTitle('BooK Portal | Books');
    this.addedbooks = this.userService.getBooks();
  }


}
