import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{
  choosenRecipeId: any = 0;
  constructor(private recipe:RecipeService) {
    // this.recipe.getRecipeById(this.choosenRecipeId).subscribe(recipes=>{
    //   this.recipes=recipes
   }
   ngOnInit() {
    // this.getHeroes();
  }
  //  setChoosenRecipe(id){
  //   this.choosenRecipeId = id;
  // }
  
}
