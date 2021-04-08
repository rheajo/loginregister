import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]$")]),
    LastName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]$")]),
    email: new FormControl('', [Validators.email, Validators.required]), 
    Contact: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[6789]{9}$")]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9_ ]+$")]),
    Gender: new FormControl('',[Validators.required]),
    DOB: new FormControl('',[Validators.required]),
    
   
   })

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.registerForm.value);
  }  
  get FirstName()
{
  return this.registerForm.get('FirstName');
}
get LastName()
{
  return this.registerForm.get('LastName');
}
get email()
{
  return this.registerForm.get('email');
}
get Contact()
{
  return this.registerForm.get('Contact');

}
 get password()
{
  return this.registerForm.get('password');
}
get Gender()
{
  return this.registerForm.get('Gender');
}

get DOB()
{
  return this.registerForm.get('DOB');
}
}

