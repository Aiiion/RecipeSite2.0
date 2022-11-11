import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {DataService} from '../data.service';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private recipe:RecipeService, 
    private data:DataService, 
    private formBuilder:FormBuilder){

}

regForm: any = this.formBuilder.group({
    regName: '',
    regEmail: '',
    regPassword: ''
  });
  ngOnInit(){}
  response:any = {};

  async tryRegister(){
    const {name, email, password} = this.regForm;
    
      await this.recipe.register(name, email, password).subscribe(response=>{
                                                     
         if(response.status == 'success') {
           window.location.href ="/";
         } else {
           alert('invalid credentials, try again');
         }
      })
  }

}
