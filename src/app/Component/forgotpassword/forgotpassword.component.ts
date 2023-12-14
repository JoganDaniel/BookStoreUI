import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/userservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})

export class ForgotpasswordComponent implements OnInit {
  forgotForm! : FormGroup
  submitted = false;

  constructor(private formBuilder : FormBuilder,private userService:UserService)
  {}
  ngOnInit()
  {
    console.log("oninit of forgotpassword called");
    this.forgotForm = this.formBuilder.group({
      Email:['',[Validators.required,Validators.email]]
    });
  }
  onSubmit()
  {
    console.log(this.forgotForm.value);
    this.userService.ForgetPasswordService(this.forgotForm.value).subscribe((response:any) => {
      console.log("response data", response);
    })
  }
}