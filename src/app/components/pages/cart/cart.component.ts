import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart!: Cart

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cartData) => {
      this.cart = cartData;
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
