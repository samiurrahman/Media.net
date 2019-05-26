import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/_services/user.service';
import { AlertService } from '../shared/_services/alert.service';
import { Title } from '@angular/platform-browser';
import { BooksModel } from '../shared/_models/book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  addBook: FormGroup;
  requiredfields = false;
  books: BooksModel.Booktype =  [] as Array<BooksModel.Booktype>;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    // private alertService: AlertService,
    private titleService: Title) { }

  ngOnInit() {

    this.addBook = this.formBuilder.group({
      id: '',
      bookName: ['', Validators.required],
      auther: ['', Validators.required],
      bookPrice: ['', Validators.required],
      isFav: false
  });

  this.titleService.setTitle('BooK Portal | AddBook');
  }
  // convenience getter for easy access to form fields
  get f() { return this.addBook.controls; }

  onSubmit() {
    this.addBook.value.id = this.uniqueId();
    if (this.addBook.invalid) {
      this.requiredfields = true;
      return;
    }
    this.userService.addBook(this.addBook.value);
    this.addBook.reset();
    this.addBook.value.isFav = false;
  }


  uniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
