import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem) {
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeCart() {
    
  }
}
