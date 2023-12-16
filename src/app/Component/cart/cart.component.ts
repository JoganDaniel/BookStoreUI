import { Component ,OnInit } from '@angular/core';
    import { BookService } from 'src/app/Services/BookService/book-service.service';
    import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  bookListarray:any=[]
  customerList:any=[]
  count=1
  isAddressDetailsExpanded: boolean = false;
  isSummaryExpanded: boolean = false;
  selectedAddress:any


  typeOptions = ['Home', 'Work', 'Other'];

  constructor(private bookService:BookService,private rouuter:Router)
  {

  }
  ngOnInit()
  {
    this.getAllCart()
    this.getCustomer()
  }
  getAllCart()
{
  this.bookService.getCart().subscribe((response:any) => {
    console.log(response);
    this.bookListarray = response.data
    console.log(this.bookListarray);
  })
}
minusClick(cartid:any,bookcount:any)
{
  if(bookcount>1){
    bookcount=bookcount-1
    let reqdata = {
      cartid:cartid,
      bookcount:bookcount
    }
    this.updateCart(reqdata)
  }
}
addAddress()
{
  this.rouuter.navigate(['book/customer'])
}
plusClick(cartid:any,bookcount:any)
{
  if(bookcount<=30){
    bookcount=bookcount+1
    let reqdata = {
      cartid:cartid,
      bookcount:bookcount
    }
    this.updateCart(reqdata)
  }
}
placeOrder() {
  this.isAddressDetailsExpanded = true;
}
onContinueClick()
{
this.isSummaryExpanded = true;
}
onDelete(cartid:any)
{
  console.log(cartid);
  this.bookService.deleteCart(cartid).subscribe((response:any) => {
    console.log(response);
    location.reload()
  })
  
}
updateCart(reqdata:any)
{
  this.bookService.editCart(reqdata).subscribe((response:any) => {
    console.log(response);
    location.reload()
  })
}
getCustomer()
{
  this.bookService.getCustomer().subscribe((response:any) => {
    console.log(response);
    this.customerList = response.data
    console.log(this.customerList);
  })
}
checkoutClick()
{
  var cid = this.selectedAddress.customerId
  console.log(cid);
  
  this.bookService.orderPlaced(cid,1).subscribe((response:any) => {
    console.log(response);
    this.rouuter.navigate(['book/order'])
  })
}
}
