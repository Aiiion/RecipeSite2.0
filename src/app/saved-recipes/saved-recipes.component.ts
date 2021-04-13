import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  savedRecipes :any =[];

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.savedRecipes = this.data.getSavedRecipes();
  }

}
