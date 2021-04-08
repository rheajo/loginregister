import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    emailId: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9_ ]+$")]),
  })  

  constructor(public fb:FormBuilder,
    private router: Router,

    public CrudServiceService:CrudServiceService) { }

  ngOnInit(): void {
  }
  onLogin()
  {
    console.log(this.loginForm.value);
  } 
  get email()
  {
    return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  onSubmit(){
    this.CrudServiceService.login(this.loginForm.value).subscribe(res =>
      console.log(this.loginForm.value))
  }







}
