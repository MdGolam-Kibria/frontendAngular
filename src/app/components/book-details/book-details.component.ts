import {Component, OnInit} from '@angular/core';
import {Book} from '../../common/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book = new Book();
  size: string[] = ["A4","A3","A1","A5"];

  constructor(
    private activeRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(value => {
      this.getBookInfoByBookId();
    });
  }

  getBookInfoByBookId() {
    const haveAnyBookId: boolean = this.activeRoute.snapshot.paramMap.has('id');
    if (haveAnyBookId) {
      const currentBookId = this.activeRoute.snapshot.paramMap.get('id');
      this.bookService.getSingleBookById(parseInt(currentBookId)).subscribe(value => {
        this.book = value;
      });
      return;
    }
    this.router.navigateByUrl('/**');

  }


}
