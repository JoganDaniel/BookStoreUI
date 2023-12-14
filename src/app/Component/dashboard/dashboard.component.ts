import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
 
  private _mobileQueryListener: () => void;

 
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private bookService:BookService,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
 
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  // searchNotes(event:any)
  // {
  //   console.log(event.target.value);
    
  //   this.bookService.sendData(event.target.value)
  // }
  accountClick(){
    this.router.navigate(['book/customer'])
  }
  cartClick(){
    this.router.navigate(['book/cart'])
  }
  searchNotes(event:any){

  }
  wishlistClick()
  {
    this.router.navigate(['book/wishlist'])
  }
  homeClick()
  {
    this.router.navigate(['book/displaybook'])
  }
}