import { Component } from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private recipe:RecipeService) { }

  token:any = localStorage.token;
  ngOnInit(): void {
  }
  async logout(){
    
      await this.recipe.logout().subscribe(response=>{
                                                     
          localStorage.token = null;
          window.location.href ="/login";
         
      }, err => {
        alert('It seems as you are already logged out')
        localStorage.token = null;
          window.location.href ="/login";
        console.log(err)
      })
  }
  getToken(){
    return localStorage.token;
  }

}
