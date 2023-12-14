import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup
  submitted = false;

  constructor(private formBuilder : FormBuilder,private userService: UserService)
  {}
  ngOnInit()
  {
    console.log("oninit called");
    this.registerForm = this.formBuilder.group({
      firstname:['',Validators.required],
      phonenumber:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    });
  }
  onSubmit()
  {
    console.log(this.registerForm.value);
    this.userService.RegisterService(this.registerForm.value).subscribe((response:any) => {
      console.log("response data", response);
    })  
  }
}

