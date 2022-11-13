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
  token: any = localStorage.token;

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
  addRecipeToList(recipe, saveTo): Observable<any>{
    
    return this.http.post(environment.api + 'recipe-lists/update',
      [recipe, saveTo],
      this.getRequestOptions()
    );
  }
  getSavedRecipes() : Observable<any>{
    return this.http.get(environment.api + 'recipe-lists/index',
      this.getRequestOptions()
    );
  }
  removeSavedRecipe(recipe, list_id): Observable<any>{
    return this.http.post(environment.api + 'recipe-lists/remove', 
      {recipe,list_id}, 
      this.getRequestOptions()
    );
  }
 
  createList(name): Observable<any> {
    return this.http.post(environment.api + 'recipe-lists/create', 
      {name}, 
      this.getRequestOptions()
    );
  }
  deleteList(id): Observable<any> {
    return this.http.post(environment.api + 'recipe-lists/delete', 
    {id}, 
    this.getRequestOptions()
  );
  }
  
}
