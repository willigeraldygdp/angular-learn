import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book-list/book.model';
import {addBook, AppState, removeBook, retrievedBookList, selectBooks} from "./book.reducer";
import {select, Store} from "@ngrx/store";
import {GoogleBooksService} from "./book.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  books$: Observable<Array<Book>> | undefined = this.store.pipe(select(state=>state.books))
  bookCollection$: Observable<any> | undefined
  count: Observable<number> | undefined = this.store.select(state=>state.testCount)

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => {
        console.log(books);
        this.store.dispatch(retrievedBookList({ books }))
        this.books$ = of(books)
      });
    //this. books$= this.store.pipe(select(state=>state.books))
  }

  onAdd(bookId: any) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: any) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
