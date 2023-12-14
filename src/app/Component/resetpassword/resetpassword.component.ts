import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/userservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm! : FormGroup
  submitted = false;
  token:any;

  constructor(private formBuilder : FormBuilder ,private userService:UserService,private activatedRoute:ActivatedRoute)
  {
     this.token = this.activatedRoute.snapshot.paramMap.get('token')
  }
  ngOnInit()
  {
    console.log("oninit called");
    this.resetForm = this.formBuilder.group({
      //Email:[''],
      NewPassword:['',[Validators.required,Validators.minLength(6)]],
      ConfirmPassword:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSubmit()
  {
    console.log(this.resetForm.value);
    console.log('----TOKEN----'+this.token)
    this.userService.ResetPasswordService(this.resetForm.value,this.token).subscribe((response) => {
      console.log("response data", response);
    })  
  }
}
