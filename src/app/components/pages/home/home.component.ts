import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food-service.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) {
        this.foods = foodService.getAllFoodBySearchTerm(params.searchTerm);
      } else {
         this.foods = foodService.getAll();
      }
    });
    console.log(this.foods);
  }

  ngOnInit(): void {
    console.log("this is onInit() method");
  }

}
