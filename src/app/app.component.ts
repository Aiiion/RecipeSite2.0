import { Component } from '@angular/core';
import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'u07';
  recipes: any = [];
  savedRecipes: any = []
  constructor(private recipe:RecipeService){
    this.recipe.getRecipeAll().subscribe(recipes=>{
      console.log(recipes)
      this.recipes=recipes
    })
  }
  saveRecipe(recipe){
    this.savedRecipes.push(recipe);
    console.log(this.savedRecipes);
    return this.savedRecipes;
  }
}
