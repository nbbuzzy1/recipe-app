import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.thepacker.com/sites/default/files/sonic-slinger.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.thepacker.com/sites/default/files/sonic-slinger.jpg')
  ]; 
  getRecipes() {
    return this.recipes.slice();
  }

}