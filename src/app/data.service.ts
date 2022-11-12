import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  choosenRecipeId: any = 0;
  savedRecipes: any = this.getSavedRecipes();
  userId:any = localStorage.user_id;

  constructor(private http:HttpClient) { }

  getRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    });
    const requestOptions = { headers: headers };
    return requestOptions;
  }

  setChoosenRecipeId(id){
    this.choosenRecipeId = id;
  }
  getChoosenRecipeId(){
    return this.choosenRecipeId;
  }
  addSavedRecipe(recipe){
    this.savedRecipes.push(recipe);
    this.http.post(environment.api + 'recipeList/', null, this.getRequestOptions());
    
    console.log(this.savedRecipes)
  }
  getSavedRecipes() : Observable<any>{
    return this.http.get(environment.api + 'recipe-lists/index',
      this.getRequestOptions()
    );
  }
  removeSavedRecipe(recipe){
    this.savedRecipes = this.savedRecipes.filter(savedRecipe => savedRecipe !== recipe)
    console.log(this.savedRecipes);
    
  }
 
  createList(name): Observable<any> {
    return this.http.post(environment.api + 'recipe-lists/create', 
      name, 
      this.getRequestOptions()
    );
  }
  
}
