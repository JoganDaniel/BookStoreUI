import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  bookListarray:any=[]
constructor(private bookService:BookService){

}
ngOnInit()
{
this.getAllWishlist()
}
getAllWishlist()
{
  this.bookService.getWishlist().subscribe((response:any) => {
    console.log(response);
    this.bookListarray = response.data
    console.log(this.bookListarray);
  })
}
addcartClicked(bookid:any,wishlistid:any)
{
  let reqData={
    BookId:bookid,
    WishlistId:wishlistid
  }
  this.bookService.moveToCart(reqData).subscribe((response:any) => {
    console.log(response);
    location.reload();
  })
}
deleteClicked(wishlistid:any)
{
  this.bookService.deleteWishlist(wishlistid).subscribe((response:any) => {
    console.log(response);
    location.reload();
  })
}
}
