import {Component, OnInit} from '@angular/core';
import {Book} from '../../common/book';
import {BookService} from '../../services/book.service';
import {BookCategory} from '../../common/BookCategory';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../service/cart.service';
import {CartItem} from '../../common/cart-item';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  category: BookCategory[];
  currentCategoryId: number;
  searchMode: boolean;

  constructor(
    private  bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    // this.bookList();
    this.activatedRoute.paramMap.subscribe(() => {
      this.bookList();
    });
  }

  bookList() {
     this.searchMode = this.activatedRoute.snapshot.paramMap.has('keyword');
    if (this.searchMode) {/*detect search mode*/
      this.handleSearchBooks();
    } else {
      this.handleListBooks();
    }
   }


  handleListBooks() {
    /**
     * first check actuvated route have any param or not
     */
    const haveCategoryId: boolean = this.activatedRoute.snapshot.paramMap.has('id');

    if (haveCategoryId) {
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id');
      this.bookService.getBookByCatId(this.currentCategoryId).subscribe(
        data => {
          this.books = data;
        }
      );

    } else {
      this.currentCategoryId = 1;

      this.bookService.getbooks().subscribe(
        // data => this.books = data.books
        data => {
          this.books = data;
          console.log('ok' + this.books);
        }
      );


    }
    this.bookService.getAllCategory().subscribe(
      data => {
        this.category = data;
      }
    );
  }

  handleSearchBooks() {
    const currentSearchKey = this.activatedRoute.snapshot.paramMap.get('keyword');
    console.log('currentSearchKey' + currentSearchKey);

    if (currentSearchKey === '') {
      this.bookService.getbooks().subscribe(
        // data => this.books = data.books
        data => {
          this.books = data;
          console.log('ok' + this.books);
        }
      );
      return;
    }

    this.bookService.getBooksByName(currentSearchKey).subscribe(value => {
      this.books = value;
    });

  }


  /**
   * For Add To Cart Functionality
   */
  addToCart(book: Book) {
    console.log(`TotalPrice   : = ${book.unitPrice}, TotalQuantity: = ${book.quantity}`);
    const cartItems = new CartItem(book);
    this.cartService.addToCart(cartItems);
  }
}
