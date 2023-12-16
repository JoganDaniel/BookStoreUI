import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  bookListarray:any=[]
  constructor(private router:Router)
  {

  }
  ngOnInit(){

  }
  clicked()
  {
    this.router.navigate(['book/displaybook'])
  }
}
