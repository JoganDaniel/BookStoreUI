import { Component,OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(){
  }
  onTabChange(event: MatTabChangeEvent): void {
    if (event.index === 0) {
      // Styles or logic for the first tab
      console.log('Switched to Sign Up tab');
    } else if (event.index === 1) {
      // Styles or logic for the second tab
      console.log('Switched to Login tab');
    }
  }
}
