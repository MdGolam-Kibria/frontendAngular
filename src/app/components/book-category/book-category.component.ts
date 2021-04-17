import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {BookCategory} from '../../common/BookCategory';
import {Book} from '../../common/book';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  category: BookCategory[];

  constructor(private apiService: BookService) {
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.apiService.getAllCategory().subscribe(
      data => {
        this.category = data;
      }
    );
  }

}
