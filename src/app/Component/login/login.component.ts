import { Token } from '@angular/compiler';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/userservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm! : FormGroup
  submitted = false;

  constructor(private formBuilder : FormBuilder,private userService: UserService,private router:Router,private snackBar:MatSnackBar)
  {}
  ngOnInit()
  {
    console.log("oninit called");
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSubmit()
  {
    console.log(this.loginForm.value);
    console.log("-----$$$$-----")
    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.userService.loginservice(reqData).subscribe((response:any) => {
      console.log(response)
      localStorage.setItem('token',response.data)
      localStorage.setItem('id',response.id)
      localStorage.setItem('role',response.role)
      this.snackBar.open('Login Successfull', '', {
        duration: 2000,
      });
      //this.snackBar.open()
      this.router.navigate(['book/displaybook'])
     })
    }
}