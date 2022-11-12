import {Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {DataService} from '../data.service';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private recipe:RecipeService, 
              private data:DataService, 
              private formBuilder:FormBuilder){
    
  }
  
  form: any = this.formBuilder.group({
    email: '',
    password: ''
  });
  ngOnInit(){}
  response:any = {};

  async tryLogin(){
    const {email, password} = this.form;
    
      await this.recipe.login(email, password).subscribe(response=>{
          
          localStorage.setItem("token", response.authorisation.token)
          localStorage.setItem("user_id", response.user.id)
          window.location.href ="/";
      
      }, err => {
        alert('Login failed, try again')
      })
  }
    
}
