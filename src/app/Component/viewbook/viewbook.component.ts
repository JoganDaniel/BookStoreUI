import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book-service.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss']
})
export class ViewbookComponent implements OnInit {
  book:any
  description: any;
  stars: boolean[] = Array(5).fill(false);
  rating:any
  feedback:any = []
  constructor(private route: ActivatedRoute,private bookService:BookService)
  {

  }
  ngOnInit()
  {
    console.log("viewbook");
    
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      const myData = JSON.parse(params['myData']);
      this.book=myData
      console.log(myData);
    });
    this.bookService.getFeedback(this.book.bookId).subscribe((response:any) => {
      console.log(response);
      this.feedback = response.data
      console.log(this.feedback[0].description);
    }) 
  }
  expandTextarea(): void {
    const textarea: HTMLTextAreaElement = document.getElementById(
      'descriptionTextArea'
    ) as HTMLTextAreaElement;
    textarea.style.height = 100+'px';
    textarea.style.height = textarea.scrollHeight + 2 + 'px';
  }
  rateBook(rating: number): void {
    this.stars = this.stars.map((_, index) => index < rating);
    this.rating = rating
    console.log(this.rating);
    
  }
  onSubmit()
  {
   var reqdata={
     BookId:this.book.bookId,
     Description:this.description,
     Rating:this.rating
   } 
   this.bookService.addFeedback(reqdata).subscribe((response:any) => {
    console.log(response);
    location.reload()
  }) 

  }
  getStarsFromRating(rating:any): boolean[] {
    const starsArray: boolean[] = Array(5).fill(false);
 
    for (let i = 0; i < rating; i++) {
        starsArray[i] = true;
    }
    return starsArray;
  }
  wishlistClick(bookid:any)
  {
    console.log(bookid);
    this.bookService.addWishlist(bookid).subscribe((response:any) => {
      console.log(response);
    }) 
  
  }
  cartClick(bookid:any)
  {
    let reqdata = 
    {
      idbook:bookid,
      bookcount:1
    }
    console.log(bookid);
    this.bookService.addCart(reqdata).subscribe((response:any) => {
      console.log(response);
    }) 
  
  }
}
