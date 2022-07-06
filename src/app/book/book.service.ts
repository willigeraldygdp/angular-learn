import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book-list/book.model';
import {MessageService} from "../message.service";

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient, private messageService:MessageService) {}

  getBooks(): Observable<Array<Book>> {
    const books = this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
    this.messageService.add('[BookService] fetch data')
    return books
  }
}
