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
  savedRecipes: any = [];
  displayedRecipes: any = [];
  onlyGlutenFree: boolean = false

  constructor(private recipe:RecipeService){
    this.recipe.getRecipeAll().subscribe(recipes=>{
      console.log(recipes)
      this.recipes=recipes
      this.displayedRecipes=recipes
      console.log(this.displayedRecipes)
    })
  }
  saveRecipe(recipe){
    this.savedRecipes.push(recipe);
    console.log(this.savedRecipes);
    return this.savedRecipes;
  }
  glutenFree(){
  // if(!this.onlyGlutenFree){
  // this.displayedRecipes.recipes = this.displayedRecipes.recipes.filter(
  //   recipe => recipe.glutenFree, false)
  //   console.log("removed gluten");
  //   this.onlyGlutenFree = true;
  // }else{
  //   this.displayedRecipes.recipes.push(this.recipes.recipes.filter(
  //     recipe => recipe.glutenfree, false
  //   ))
  //   this.onlyGlutenFree =false;
  // }
  //   return this.displayedRecipes;
  }

  unSaveRecipe(savedRecipe){
    console.log(this.savedRecipes);
    this.savedRecipes.forEach(recipe =>
      {if(savedRecipe == recipe){
        savedRecipe.remove();
      }})
  }
}
