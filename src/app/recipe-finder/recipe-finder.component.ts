import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {DataService} from '../data.service';
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
  

  constructor(private recipe:RecipeService, private data:DataService){
    
    this.recipe.getRecipeAll().subscribe(recipes=>{
      this.recipes=recipes
      console.log(this.recipes)
    })
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
    this.data.setChoosenRecipeId(id);
    console.log(id + "finder")
   }
  unSaveRecipe(savedRecipe){
    
    this.savedRecipes = this.savedRecipes.filter(recipe => recipe !== savedRecipe)
    console.log(this.savedRecipes);
  }
}
