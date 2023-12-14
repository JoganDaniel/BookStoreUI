import { Component ,OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  bookListarray:any=[]
  count=1
  isAddressDetailsExpanded: boolean = false;
  isSummaryExpanded: boolean = false;

  constructor(private bookService:BookService)
  {

  }
  ngOnInit()
  {
    this.getAllCart()
  }
  getAllCart()
{
  this.bookService.getCart().subscribe((response:any) => {
    console.log(response);
    this.bookListarray = response.data
    console.log(this.bookListarray);
  })
}
minusClick()
{
  this.count = this.count-1;
}
plusClick()
{
  this.count = this.count+1;
}
placeOrder() {
  this.isAddressDetailsExpanded = true;
}
onContinueClick()
{
this.isSummaryExpanded = true;
}
}
