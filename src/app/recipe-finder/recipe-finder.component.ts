import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-finder',
  templateUrl: './recipe-finder.component.html',
  styleUrls: ['./recipe-finder.component.css']
})
export class RecipeFinderComponent {

  title = 'u07';
  recipes: any = [];
  savedRecipes: any = [];
  gluten: boolean = false;
  soy: boolean = false;
  peanut: boolean = false;
  mealType: string = "all";
  filterRecipes: boolean = false;
  choosenRecipeId: any = 0;

  constructor(private recipe:RecipeService){
    if(this.soy || this.peanut || this.gluten || this.mealType !== "all"){
      this.recipe.getRecipesFiltered(this.gluten, this.soy, this.peanut, this.mealType).subscribe(recipes=>{
        this.recipes = recipes
    })
  }
  else{
    this.recipe.getRecipeAll().subscribe(recipes=>{
      this.recipes=recipes
      console.log(this.recipes)
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
  toggleSoyFree(){
    if(this.soy){
      this.soy = false
    }else{
      this.soy = true
    }
    this.getFilteredRecipes()
  }
  togglePeanutFree(){
    if(this.peanut){
      this.peanut = false
    }else{
      this.peanut = true
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
  setChoosenRecipe(id){
    this.choosenRecipeId = id;
  }
  unSaveRecipe(savedRecipe){
    
    this.savedRecipes = this.savedRecipes.filter(recipe => recipe !== savedRecipe)
    console.log(this.savedRecipes);
  }
}
