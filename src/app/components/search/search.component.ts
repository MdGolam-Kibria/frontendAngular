import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
  }

  searchBooksByName(searchKey: string) {
    this.router.navigateByUrl('/search/' + searchKey);
    // this.bookService.getBooksByName(searchKey).subscribe(value => {
    //   /*//this "search" key must be match with app.module.ts seach route*/
    //   this.router.navigateByUrl('/search/' + searchKey);
    // });
  }
}
