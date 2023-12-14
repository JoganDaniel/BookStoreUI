import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
token:any
  constructor(private httpService:HttpService) { }

  getAllBooks()
  {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.GetService('Book/GetAllBooks',true,httpAuthOptions)
  }
  addFeedback(reqData:any)
  {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.postService('Feedback/AddToFeedback',reqData,true,httpAuthOptions)
  }
  getFeedback(reqdata:any)
  {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.GetService('Feedback/GetFeedback?bookid='+reqdata,true,httpAuthOptions)
  }
  addWishlist(reqdata:any)
  {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.postService('WishList/AddwishList?bookId='+reqdata,{},true,httpAuthOptions)
  }
  getWishlist()
  {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.GetService('WishList/GetWishlist',true,httpAuthOptions)
  }
  addCart(reqdata:any)
  {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.postService('Cart/AddCart?bookId='+reqdata.idbook+'&bookcount='+reqdata.bookcount,{},true,httpAuthOptions)
  }
  getCart()
  {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.GetService('Cart/GetCart',true,httpAuthOptions)
  }
}

