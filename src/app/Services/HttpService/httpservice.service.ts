import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl ='https://localhost:5002/api/';
  constructor(private httpclient: HttpClient) { }

  postService(url:string, reqbody: any, token: boolean,httpAuthOptions: any){
    return this.httpclient.post(this.baseUrl+url,reqbody,token && httpAuthOptions);
  }
  
  PutService(url:string,reqBody: any,token:boolean,httpAuthOptions:any){
    console.log("data in http service",reqBody)
    return this.httpclient.put(this.baseUrl+url, reqBody,token && httpAuthOptions)
  }
  GetService(url:string,token:boolean,httpAuthOptions:any){
    console.log("data in http get service")
    return this.httpclient.get(this.baseUrl+url,token && httpAuthOptions)
  }
}