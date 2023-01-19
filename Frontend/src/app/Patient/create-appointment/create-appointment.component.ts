import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  
  form:any;
  data:any;
  submitted:any;
  constructor(private appointmentService:ServiceService, private formBuilder:FormBuilder, private toastr:ToastrService,
    private router:Router){}

    createFormA(){
      this.form = this.formBuilder.group({
        title: ['', Validators.required],
        pname: ['', Validators.required],
        mobile: ['', Validators.required],
        date: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        nicpass: ['', Validators.required],
        area: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.createFormA();
    
  }
  get f(){
    return this.form.controls;
  }
  insertDataA(){
    this.submitted=true;
    
    if(this.form.invalid){
     return;
    }

    this.appointmentService.insertDataA(this.form.value).subscribe(res =>{
     this.data = res;
     this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
       timeOut: 1000,
       progressBar: true,
     });
     this.router.navigateByUrl('Home-Appointment');
    });
 }
}
