import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  //also we can use viewChild to access the template referance variable here
  @ViewChild('form') signpForm?: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signpForm);
  }
  
}
