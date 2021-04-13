import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  choosenRecipeId: any = 0;
  savedRecipes: any = [];
  amountSaved: number = 0;

  constructor() { }

  setChoosenRecipeId(id){
    this.choosenRecipeId = id;
  }
  getChoosenRecipeId(){
    return this.choosenRecipeId;
  }
  addSavedRecipe(recipe){
    this.savedRecipes.push(recipe);
    this.amountSaved++;
    console.log(this.savedRecipes)
  }
  getSavedRecipes(){
    return this.savedRecipes;
  }
  removeSavedRecipe(recipe){
    this.savedRecipes = this.savedRecipes.filter(savedRecipe => savedRecipe !== recipe)
    console.log(this.savedRecipes);
    this.amountSaved--;
  }
  getAmountSaved(){
    return this.amountSaved;
  }
}
