import { Component } from '@angular/core';
import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  ngOnInit(): void {
  }
}
// if(!this.onlyGlutenFree){
  // this.displayedRecipes.recipes = this.displayedRecipes.recipes.filter(
  //   recipe => recipe.glutenFree, false)
  //   console.log("removed gluten");
  //   this.onlyGlutenFree = true;
  // }else{
  //   this.displayedRecipes.recipes.push(this.recipes.recipes.filter(
  //     recipe => recipe.glutenfree, false
  //   ))
  //   this.onlyGlutenFree =false;
  // }
  //   return this.displayedRecipes;