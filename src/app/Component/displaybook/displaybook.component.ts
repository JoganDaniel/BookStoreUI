import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {
  bookList:any 
  bookListarray?:any= []
    constructor(private bookService:BookService,private router: Router){

  }
  ngOnInit(){
  console.log("display book");
  this.getallbooks()
  }
  getallbooks()
  {
    console.log("getallbooks.......")
    this.bookService.getAllBooks().subscribe((result:any)=>{
      console.log(result)
      this.bookList=result
      this.bookListarray=this.bookList.data
      console.log(this.bookList)
    })
  }
  openDialog(book:any){
    console.log(book);
    this.router.navigate(['book/viewbook'], { queryParams: { myData: JSON.stringify(book) } });
  }
  
}
