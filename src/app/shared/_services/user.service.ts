import { Injectable } from '@angular/core';
import { BooksModel } from '../_models/book';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
    constructor() { }
    public books = {
        books: [],
        favourites: []
    };

    public booksData: BehaviorSubject<any> = new BehaviorSubject('');

    addBook(book: BooksModel.Booktype) {
        this.localStore('books', book);
    }

    addFavourites(favourites: BooksModel.Booktype) {
        this.updateIsFav(favourites.id, true);
        this.localStore('favourites', favourites);
    }

    updateIsFav(favourites, flage) {
        const book = this.getBooks();
        const index = book['books'].findIndex( val => val.id === favourites);
        book.books[index].isFav = flage;
        localStorage.setItem('books', JSON.stringify(book));
    }

    localStore(key, book) {
        const books = this.getBooks();
        if (books) {
            // books[key]
            books[key].unshift(book);
            localStorage.setItem('books', JSON.stringify(books));
            this.forcast();
        } else {
            this.books[key].unshift(book);
            localStorage.setItem('books', JSON.stringify(this.books));
            this.forcast();
        }
    }

    removeFavourites(id: string) {
        this.updateIsFav(id, false);
        this.removal(id, 'favourites');
    }

    delete(id: string) {
        this.removal(id, 'books');
        this.removal(id, 'favourites');
    }

    removal(id, key) {
        const books = this.getBooks();
        const index = books[key].findIndex(book => book.id === id);
        books[key].splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        this.forcast();
    }

    forcast() {
      this.booksData.next(JSON.parse(localStorage.getItem('books')));
    }

    getBooks() {
       return JSON.parse(localStorage.getItem('books'));
    }
}

