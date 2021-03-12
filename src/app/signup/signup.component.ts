import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { driverInfo } from "../models/tutorial.model";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ed = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
  phoneNo = '[0-9]{14}';
  name = '[a-zA-Z]*';
  carOwnerInfo = this.fb.group({
    firstName: [null, Validators.compose([
      Validators.required,Validators.pattern(this.name)])],
    lastName: [null, Validators.compose([
      Validators.required,Validators.pattern(this.name)])],
    address: [null, Validators.required],
    contact: ['+234', Validators.compose([
      Validators.required,Validators.pattern(this.phoneNo)])
    ], plateNo: [null, Validators.required],
    driversId: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.pattern(this.ed),])
    ],    state: [null, Validators.required], 
  });

  
  constructor(private fb: FormBuilder) {}
  ngOnInit(){

  }
  onSubmit() {
    let drv = new driverInfo()
    drv.fullName = this.carOwnerInfo.get('firstName').value +" " + this.carOwnerInfo.get('lastName').value
    drv.address = this.carOwnerInfo.get('address').value
    drv.contact = this.carOwnerInfo.get('contact').value
    drv.plateNo = this.carOwnerInfo.get('plateNo').value
    drv.photo = ''
    drv.driversId = this.carOwnerInfo.get('driversId').value
    console.info(drv);
  }
}

