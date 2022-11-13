import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{
  choosenRecipe: any = [];

  constructor(private recipe:RecipeService, private data:DataService) {}
   ngOnInit() {
    
    this.recipe.getRecipeById(this.data.getChoosenRecipeId()).subscribe(response =>
      {
        this.choosenRecipe = response
        console.log(this.choosenRecipe)
      }, err => {
        console.log(err)
        this.logout();
      }
    )
  } 
  logout(){
    alert('You have been logged out');
        localStorage.setItem("token", null);
        this.data.token = null;
        window.location.href ="/login";
  }
}