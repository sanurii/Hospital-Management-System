import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ceate-pharmacy',
  templateUrl: './ceate-pharmacy.component.html',
  styleUrls: ['./ceate-pharmacy.component.css']
})
export class CeatePharmacyComponent implements OnInit {

    
  form:any;
  data:any;
  submitted:any;
  constructor(private pharmacyService:ServiceService, private formBuilder:FormBuilder, private toastr:ToastrService,
    private router:Router){}

    createFormPP(){
      this.form = this.formBuilder.group({
        medicineName: ['', Validators.required],
        type: ['', Validators.required],
        quantity: ['', Validators.required],
        expirationDate: ['', Validators.required],
        price: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.createFormPP();
    
  }
  get f(){
    return this.form.controls;
  }
  insertDataPP(){
    this.submitted=true;
    
    if(this.form.invalid){
     return;
    }

    this.pharmacyService.insertDataPP(this.form.value).subscribe(res =>{
     this.data = res;
     this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
       timeOut: 1000,
       progressBar: true,
     });
     this.router.navigateByUrl('Home-Pharmacy');
    });
 }
}
