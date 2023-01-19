import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {

// loginForm: any;
email:any;
pass:any;
// submitted:any;
constructor(private router:Router, private toastr:ToastrService, private fb: FormBuilder){

}

// loadForm(){
//   this.loginForm = this.fb.group({
//     email: ['', [Validators.required, Validators.email]],
//     pass: ['', Validators.required],
//   })
// }

ngOnInit(): void {
  // this.loadForm();
}

//   get f(){
//   return this.loginForm.controls;
// }

login(){
  // this.submitted=true;
  // if(this.loginForm.invalid){
  // }
  if(this.email=='doctor@gmail.com' && this.pass=='doctor123'){
    this.toastr.success('Login Successfully!');
    this.router.navigateByUrl('doctordash');
  }else{
    this.toastr.error('Email or Password Incorrect!!');
  }
}

}