import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  savedRecipes :any =[];
  parsedRecipes:any= [];
  form: any = this.formBuilder.group({
    name: ''
  });
  constructor(private data:DataService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.savedRecipes = this.tryGetSaved();
  }
  async unSaveRecipe(recipe, list_id){

    await this.data.removeSavedRecipe(recipe, list_id).subscribe(response=>{
          
      this.savedRecipes = response;
      console.log(response);
  
  }, err => {
    this.logoutUser();
  })
  }
  async tryCreate() {
    
      await this.data.createList(this.form.name).subscribe(response=>{
          
          this.savedRecipes = response;
          console.log(response);
      
      }, err => {
        this.logoutUser();
      })
  }
  async tryGetSaved() {
    
    await this.data.getSavedRecipes().subscribe(response=>{
        
        this.savedRecipes = response;
        console.log(response);
    
    }, err => {
      this.logoutUser();
    })
}
async tryDelete(id) {
    
  await this.data.deleteList(id).subscribe(response=>{
      
      this.savedRecipes = response;
      console.log(response);
  
  }, err => {
    this.logoutUser();
  })
}

logoutUser() {
  alert('You have been logged out');
      localStorage.setItem("token", null);
      window.location.href ="/login";
      this.data.token = null;
}
}
