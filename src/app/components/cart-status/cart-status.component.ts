import {Component, OnInit} from '@angular/core';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    //subscribe to the event
    this.cartService.totalPrice.subscribe(value => {
      this.totalPrice = value;
    });
    this.cartService.totalQuantity.subscribe(value => {
      this.totalQuantity = value;
    });
  }


}
