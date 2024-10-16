import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Cart } from 'src/app/shared/models/Cart';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQuantity: number = 0;
  user!: User;
  constructor(cartService: CartService, private userService: UserService) {
   cartService.getCartObservable().subscribe((cartData) => {
    this.cartQuantity = cartData.totalCount;
   })
   userService.userObservable.subscribe((newUser)=> {
    this.user = newUser;
   })
  }

  logout() {
    this.userService.logout();
  }

  get isUserAuthenticated() {
    return this.user.token;
  }
  
  ngOnInit(): void {
  }

}
