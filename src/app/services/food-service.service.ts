import { Injectable } from '@angular/core';
import { SAMPLE_FOOD } from 'src/data';
import { Food } from '../shared/models/Food';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GET_ALL_FOOD_URL, GET_FOOD_BY_ID, GET_FOOD_BY_SEARCH_PARAMS } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(GET_ALL_FOOD_URL);
  }

  // Search Food
  getAllFoodBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.httpClient.get<Food[]>(GET_FOOD_BY_SEARCH_PARAMS + searchTerm);
    //return this.getAll()
    //.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  //Get food by food id
  getFoodById(foodId: string): Observable<Food> {
    return this.httpClient.get<Food>(GET_FOOD_BY_ID + foodId);
    //return this.getAll().find(food => food.id ===foodId)??new Food();
  }
}
