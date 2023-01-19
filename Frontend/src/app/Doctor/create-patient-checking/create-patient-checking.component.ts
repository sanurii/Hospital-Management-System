import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient-checking',
  templateUrl: './create-patient-checking.component.html',
  styleUrls: ['./create-patient-checking.component.css']
})
export class CreatePatientCheckingComponent implements OnInit {

  form:any;
  data:any;
  submitted:any;
  constructor(private patientCheckingService:ServiceService, private formBuilder:FormBuilder, private toastr:ToastrService,
    private router:Router){}

    createFormP(){
      this.form = this.formBuilder.group({
        paname: ['', Validators.required],
        diagnose: ['', Validators.required],
        ddate: ['', Validators.required],
        phone: ['', Validators.required],
        dname: ['', Validators.required],
        med1: ['', Validators.required],
        med2: ['', Validators.required],
        med3: ['', Validators.required],
        med4: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.createFormP();
    
  }
  get f(){
    return this.form.controls;
  }
  insertDataP(){
    this.submitted=true;
    
    if(this.form.invalid){
     return;
    }

    this.patientCheckingService.insertDataP(this.form.value).subscribe(res =>{
     this.data = res;
     this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
       timeOut: 1000,
       progressBar: true,
     });
     this.router.navigateByUrl('home-patientChecking');
    });
 }
}
