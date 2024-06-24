import { Injectable } from '@angular/core';
import { SAMPLE_FOOD } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return SAMPLE_FOOD;
  }

  // Search Food
  getAllFoodBySearchTerm(searchTerm: string): Food[] {
    return this.getAll()
    .filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  //Get food by food id
  getFoodById(foodId: string) {
    return this.getAll().find(food => food.id ===foodId)??new Food();
  }
}
