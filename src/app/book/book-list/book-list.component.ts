import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book.model';
import {of} from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() books: any = [];
  @Input() count: any = 0;
  @Output() add = new EventEmitter();

  onClick() {
    //console.log(this.books, this.count.subscribe((x)=>console.log(x)));
  }
}
