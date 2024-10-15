import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food-service.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService, 
    private cartService: CartService, private router: Router) {
    let foodObservable: Observable<Food>;
    activatedRoute.params.subscribe((params) => {
    if(params.id) {
      console.log("Food id" + params.id);
      foodObservable = foodService.getFoodById(params.id);
    }
    foodObservable.subscribe((serverFood) => {
      this.food = serverFood;
    });
  });

  }

  ngOnInit(): void {
    console.log("This is Food page component: init method");
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }

}
