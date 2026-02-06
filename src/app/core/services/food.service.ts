import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({ providedIn: 'root' })
export class FoodService {

  private storageKey = 'foods';
  private foods: Food[] = [];

  constructor() {
    const savedFoods = localStorage.getItem(this.storageKey);
    if (savedFoods) {
      this.foods = JSON.parse(savedFoods);
    }
  }

  getFoods() {
    return this.foods;
  }

  addFood(food: Food) {
    this.foods.push(food);
    this.saveToStorage();
  }

  deleteFood(id: number) {
    this.foods = this.foods.filter(f => f.id !== id);
    this.saveToStorage();
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.foods));
  }
}
