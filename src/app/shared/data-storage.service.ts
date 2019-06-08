import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

import { Recipe } from '../recipes/recipe.model'

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://recipe-app-30af1.firebaseio.com/recipes.json', recipes)
    .subscribe(response => {
      console.log(response)
    })
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://recipe-app-30af1.firebaseio.com/recipes.json')
    .subscribe(recipes => {
      this.recipesService.setRecipes(recipes)
    })
  }
}