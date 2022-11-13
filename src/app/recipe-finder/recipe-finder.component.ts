import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {DataService} from '../data.service';
@Component({
  selector: 'app-recipe-finder',
  templateUrl: './recipe-finder.component.html',
  styleUrls: ['./recipe-finder.component.css']
})
export class RecipeFinderComponent {

  recipes: any = [];
  gluten: boolean = false;
  soy: boolean = false;
  peanut: boolean = false;
  mealType: string = "all";
  savedRecipes:any = this.tryGetSaved();
  saveTo:number = 0;

  constructor(private recipe:RecipeService, private data:DataService){
    this.recipe.getRecipeAll().subscribe(response=>{
      
      this.recipes=response
      console.log(this.recipes)
    }, err => {
      console.log(err)
      alert('You have been logged out');
      localStorage.setItem("token", null);
      window.location.href ="/login";
    })
  }
  getFilteredRecipes(){
    this.recipe.getRecipesFiltered(this.gluten, this.soy, this.peanut, this.mealType).subscribe(response=>{
      if(response.status == 403) {
        alert('You have been logged out');
        localStorage.setItem("token", response.authorisation.token);
        window.location.href ="/login";
      }
      this.recipes = response
      console.log(this.recipes)
    })
  }
  toggleAlergenFilter(prop){
    this[prop] = !this[prop];
    this.getFilteredRecipes()
  }
  toggleMealType(type){
    this.mealType = type
    this.getFilteredRecipes()
  }
  setSaveTo(id) {
    this.saveTo = id;
  }
  async tryGetSaved() {
    
    await this.data.getSavedRecipes().subscribe(response=>{
        
        this.savedRecipes = response;
        // window.location.href ="/";
        console.log(response);
    
    }, err => {
      this.logout();
    })
  }
  async tryAddRecipe(recipe, saveTo) {
    
    await this.data.addRecipeToList(recipe, saveTo).subscribe(response=>{
        
        this.savedRecipes = response;
        // window.location.href ="/";
        console.log(response);
    
    }, err => {
      this.logout();
      alert('Could not save recipe')
    })
}
logout(){
  alert('You have been logged out');
      localStorage.setItem("token", null);
      this.data.token = null;
      window.location.href ="/login";
}
}
