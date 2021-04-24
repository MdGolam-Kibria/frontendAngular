import {Injectable} from '@angular/core';
import {CartItem} from '../common/cart-item';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {
  }

  addToCart(cartItem: CartItem) {
    //first check the weather is book/item is ready in cart or not
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;
    if (this.cartItems.length > 0) {
      //find the book/item in cart based on Id
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === cartItem.id);
      alreadyExistsInCart = (existingCartItem != undefined);
    }
    if (alreadyExistsInCart) {
      //we just increment the item/book quantity
      existingCartItem.quantity += 1;
      this.calculateTotalPrice();
      return;
    }
    //add current item to the cart items array
    this.cartItems.push(cartItem);
    //now calculate current items total price
    this.calculateTotalPrice();
  }

  public calculateTotalPrice() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    /**
     * For Calculate total Price & Quantity
     */
    this.cartItems.forEach(value => {
      totalPriceValue += value.quantity * value.unitPrice;
      totalQuantityValue += value.quantity;
    });
    console.log(`TotalPrice: = ${totalPriceValue}, TotalQuantity: = ${totalQuantityValue}`);
    /**
     * For Publish the events
     */
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

  }

  decrementsQuantity(cartItems: CartItem) {
    cartItems.quantity--;
    this.calculateTotalPrice();
  }

  removeItem(cartItems: CartItem) {
    const itemIndexNumber = this.cartItems.findIndex(temItem => temItem.id === cartItems.id);//return index number based on conditions
    if (itemIndexNumber > -1) {
      this.cartItems.splice(itemIndexNumber, 1);
      this.calculateTotalPrice();
    }

  }
}
