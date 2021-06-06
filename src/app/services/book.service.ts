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
  private getBookById = 'http://localhost:8083/ECommerce/getBookById/';

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

  /**
   * For Search books by name
   */
  getBooksByName(name: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.searchBookByName + name)
      .pipe(
        map(response => response)
      );
  }

  /**
   *  for get single book by id
   */
  getSingleBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(this.getBookById + id).pipe(
      map(response => response)
    );
  }
//ok this is my Code

}
