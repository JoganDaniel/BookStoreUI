import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/Services/BookService/book-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  formDataForm!: FormGroup;
  typeOptions = [
    { value: 1, label: 'Home' },
    { value: 2, label: 'Work' },
    { value: 3, label: 'Other' },
  ];
  constructor(private fb: FormBuilder, private bookService:BookService) {}

  ngOnInit() {
    this.formDataForm = this.fb.group({
      CustomerName: ['', Validators.required],
      Phone: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Address: ['', Validators.required],
      TypeId: [null, Validators.required],
    });
  }

  onsubClick() {
    console.log(this.formDataForm.value);
    let reqdata={
      CustomerName: this.formDataForm.value.CustomerName,
      Phone: this.formDataForm.value.Phone,
      City: this.formDataForm.value.City,
      State: this.formDataForm.value.State,
      Address: this.formDataForm.value.Address,
      TypeId: +this.formDataForm.value.TypeId,
    }
    this.bookService.addCustomer(reqdata).subscribe((response:any) => {
      console.log(response);

    })
  }
}
