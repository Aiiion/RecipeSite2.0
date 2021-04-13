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
    
    this.recipe.getRecipeById(this.data.getChoosenRecipeId()).subscribe(choosenRecipe =>{
      this.choosenRecipe = choosenRecipe
        console.log(this.choosenRecipe)
      })
    
    
  }
  
    
  }
//   this.recipe.getRecipesFiltered(this.gluten, this.soy, this.peanut, this.mealType).subscribe(recipes=>{
//     this.recipes = recipes
// })