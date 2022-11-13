import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  savedRecipes :any =[];
  form: any = this.formBuilder.group({
    name: ''
  });
  constructor(private data:DataService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.savedRecipes = this.tryGetSaved();
  }
  unSaveRecipe(recipe){
    this.savedRecipes = this.savedRecipes.filter(savedRecipe => savedRecipe !== recipe)
    this.data.removeSavedRecipe(recipe)
  }
  async tryCreate() {
    
      await this.data.createList(this.form.name).subscribe(response=>{
          
          this.savedRecipes = response;
          // window.location.href ="/";
          console.log(response);
      
      }, err => {
        alert('err, something fishy happened')
      })
  }
  async tryGetSaved() {
    
    await this.data.getSavedRecipes().subscribe(response=>{
        
        this.savedRecipes = response;
        // window.location.href ="/";
        console.log(response);
    
    }, err => {
      alert('err, something fishy happened')
    })
}
async tryDelete(id) {
    
  await this.data.deleteList(id).subscribe(response=>{
      
      this.savedRecipes = response;
      // window.location.href ="/";
      console.log(response);
  
  }, err => {
    alert('err, something fishy happened')
  })
}
}
