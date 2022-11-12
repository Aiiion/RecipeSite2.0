import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from './../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  getRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    });
    const requestOptions = { headers: headers };
    return requestOptions;
  }

  login(email, password): Observable<any> {
    
    return this.http.post('http://localhost:80/api/login', {email, password});
  }
  register(name, email, password): Observable<any> {
    
    return this.http.post('http://localhost:80/api/register', {name, email, password});
  }
  logout(): Observable<any> {
    
    return this.http.post('http://localhost:80/api/logout', null, this.getRequestOptions());
  }
  getRecipeAll(): Observable<any>{
    
    const randomiseUrl = environment.apiUrlRandom;
    return this.http.get(randomiseUrl, this.getRequestOptions());
}
  getRecipesFiltered(glutenFree, soyFree, peanutFree, mealType): Observable<any>{
    
    let query: string = environment.filteredUrl;
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
    
    return this.http.get(query+"number=10&", this.getRequestOptions());
  }
  getRecipeById(id): Observable<any>{

    return this.http.get("http://localhost:80/api/recipes/" + id, this.getRequestOptions())
  }
  
}

