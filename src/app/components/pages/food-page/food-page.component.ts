import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food-service.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
    if(params.id) {
      console.log("Food id" + params.id);
      this.food = foodService.getFoodById(params.id);
    } else {
      console.log("no id...invalid route")
    }
  });

  }

  ngOnInit(): void {
    console.log("This is Food page component: init method");
  }

}
