import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../common/book';
import {map} from 'rxjs/operators';
import {BookCategory} from '../common/BookCategory';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private allBooks = 'http://localhost:8083/ECommerce/BookList';
  private bookByCatId = 'http://localhost:8083/ECommerce/book/';
  private allCategory = 'http://localhost:8083/ECommerce/allCategory';
  private searchBookByName = 'http://localhost:8083/ECommerce/getBookByName/';

  constructor(private httpClient: HttpClient) {
  }

  getbooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.allBooks)
      .pipe(
        map(response => response)
      );
  }

  getBookByCatId(id: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.bookByCatId + id)
      .pipe(
        map(response => response)
      );
  }

  getAllCategory(): Observable<BookCategory[]> {
    return this.httpClient.get<BookCategory[]>(this.allCategory)
      .pipe(
        map(response => response)
      );
  }

  getBooksByName(name: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.searchBookByName + name)
      .pipe(
        map(response => response)
      );
  }


}
