import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  
  getRecipieAll(){
    const apiKey = environment.apiKey;
    const url = environment.apiUrl;
    return this.http.get(url+apiKey);
}
}

