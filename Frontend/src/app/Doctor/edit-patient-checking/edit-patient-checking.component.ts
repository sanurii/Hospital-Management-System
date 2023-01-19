import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit-patient-checking',
  templateUrl: './edit-patient-checking.component.html',
  styleUrls: ['./edit-patient-checking.component.css']
})
export class EditPatientCheckingComponent implements OnInit {

  id: any;
  data: any;
  patientchecking: any;
  submitted: any;

  constructor(private patientcheckingservice: ServiceService, private route: ActivatedRoute,
    private toastr: ToastrService, private fb:FormBuilder, private router:Router
  ) { 
    this.patientchecking = fb.group(
      {
        paname: '',
        diagnose: '',
        ddate: '',
        phone: '', 
        dname:'', 
        med1: '', 
        med2: '', 
        med3: '', 
        med4: '', 
      }
    )
  }

  get f(){
    return this.patientchecking.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getdatap();
    this.patientchecking();
  }

  getdatap() {
    this.patientcheckingservice.geDataByIdP(this.id).subscribe(res => {
      this.data = res;
      this.patientchecking = this.data.post;
      console.log(this.patientchecking)
    })
  }

  updateData() {
    // this.submitted=true;
    
    // if(this.patientchecking.invalid){
    //  return;
    // }
    this.patientcheckingservice.UpdateDataP(this.id, this.patientchecking).subscribe(res =>{
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
        timeOut: 1000,
        progressBar: true,
      });
      this.router.navigateByUrl('home-patientChecking');
     });
  }
}
