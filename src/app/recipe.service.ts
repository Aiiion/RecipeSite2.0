import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  
  getRecipeAll(){
    const apiKey = environment.apiKey;
    const randomiseUrl = environment.apiUrlRandom;
    return this.http.get(randomiseUrl+apiKey);
}
  getRecipesFiltered(glutenFree, soyFree, peanutFree, mealType){
    let query: string = environment.filteredUrl;
    const apiKey = environment.apiKey;
    if(glutenFree){
      query += environment.noGluten;
    }
    if(soyFree){
      query += environment.noSoy;
    }
    if(peanutFree){
      query+= environment.noPeanuts;
    }
    if(mealType !== "all"){
      query += "type=" + mealType + "&";
    }
    console.log(query+"number=10&"+apiKey)
    return this.http.get(query+"number=10&"+apiKey);
  }
  getRecipeById(id){
    const apiKey = environment.apiKey;
    return this.http.get("https://api.spoonacular.com/recipes/{" + id + "}/ingredientWidget.json" + apiKey)
  }
  
}

