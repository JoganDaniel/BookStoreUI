import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private httpService: HttpService) { }
  loginservice(reqData: any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    };
    return this.httpService.postService('User/Login?email='+reqData.email+'&password='+reqData.password,{},false,httpAuthOptions);
  };

  ForgetPasswordService(reqData: any) {
    console.log("Data in user service", reqData);
 
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    }
    return this.httpService.postService('User/ForgetPassword?email='+reqData.Email,{}, false, httpAuthOptions)
  }
  
  RegisterService(reqData: any) {
    console.log("Data in user service", reqData);
 
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    }
    return this.httpService.postService('User/Register', reqData, false, httpAuthOptions)
  }
  ResetPasswordService(reqData: any,token:any) {
    console.log("Data in user service", reqData);
 
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token
      })
    }
    return this.httpService.PutService('User/ResetPassword', reqData, true, httpAuthOptions)
  }
}