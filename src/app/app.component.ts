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
  gluten: boolean = false;
  soy: boolean = false;
  peanut: boolean = false;
  mealType: string = "all";
  filterRecipes: boolean = false;

  constructor(private recipe:RecipeService){
    if(this.soy || this.peanut || this.gluten || this.mealType !== "all"){
      this.recipe.getRecipesFiltered(this.gluten, this.soy, this.peanut, this.mealType).subscribe(recipes=>{
        this.recipes = recipes
    })
  }
  else{
    this.recipe.getRecipeAll().subscribe(recipes=>{
      this.recipes=recipes
    })}
  }
  getFilteredRecipes(){
    
    this.recipe.getRecipesFiltered(this.gluten, this.soy, this.peanut, this.mealType).subscribe(recipes=>{
      this.recipes = recipes
      console.log(this.recipes)
  })
  }
  toggleGlutenFree(){
    if(this.gluten){
      this.gluten = false
    }else{
      this.gluten = true
    }
    this.getFilteredRecipes()
  }
  toggleMealType(type){
    this.mealType = type
    this.getFilteredRecipes()
  }
  saveRecipe(recipe){
    this.savedRecipes.push(recipe);
    console.log(this.savedRecipes);
    return this.savedRecipes;
  }

  unSaveRecipe(savedRecipe){//not working
    console.log(this.savedRecipes);
    this.savedRecipes.forEach(recipe =>
      {if(savedRecipe == recipe){
        console.log(savedRecipe)
        savedRecipe.splice(index, 1);
      }})
  }
}
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