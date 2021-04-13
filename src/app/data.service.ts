import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  choosenRecipeId: any = 0;
  savedRecipes: any = [];

  constructor() { }

  setChoosenRecipeId(id){
    this.choosenRecipeId = id;
  }
  getChoosenRecipeId(){
    return this.choosenRecipeId;
  }
}
