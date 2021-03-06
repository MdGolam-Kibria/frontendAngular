import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookService} from './services/book.service';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {BookCategoryComponent} from './components/book-category/book-category.component';
import {SearchComponent} from './components/search/search.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {CartStatusComponent} from './components/cart-status/cart-status.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

/**
 * configure routes here
 */
const routes: Routes = [
  /*For Show Book Details*/
  {path: 'cart_details', component: CartDetailsComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'books', component: BookListComponent},
  {path: 'search/:keyword', component: BookListComponent},
  {path: 'category/:id', component: BookListComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxImageZoomModule,
    NgxSpinnerModule,//for add loading time progress (Library (Ngx Spinner))
    RouterModule.forRoot(routes)
  ],
  /**
   * //all service will be register here
   */
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
