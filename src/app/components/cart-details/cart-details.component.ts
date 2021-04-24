import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../common/cart-item';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.cartDetails();
  }

  cartDetails() {
    this.cartItems = this.cartService.cartItems;
    /**
     * Subscribe To the events
     */
    this.cartService.totalPrice.subscribe(value => {
      this.totalPrice = value;
    });
    this.cartService.totalQuantity.subscribe(value => {
      this.totalQuantity = value;
    });
    this.cartService.calculateTotalPrice();
  }

  incrementQuantity(cartItems: CartItem) {
    this.cartService.addToCart(cartItems);
  }

  decrementsQuantity(cartItems: CartItem) {
    if (cartItems.quantity <= 1) {
      alert('Item Quantity not less then 1');
      return;
    }
    this.cartService.decrementsQuantity(cartItems);
  }

  removeItem(cartItem: CartItem) {
    this.cartService.removeItem(cartItem);
  }
}
