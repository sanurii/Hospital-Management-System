import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-patient-checking-details',
  templateUrl: './patient-checking-details.component.html',
  styleUrls: ['./patient-checking-details.component.css']
})
export class PatientCheckingDetailsComponent {

  
  data:any;
  patientcheckings:any;
  constructor(private PatientCheckingService:ServiceService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getPatientCheckingData();
  }

  getPatientCheckingData(){
    this.PatientCheckingService.getDataP().subscribe(res =>{
      console.log(res);
      this.patientcheckings=res;
      this.patientcheckings = this.patientcheckings.existingPosts;
    })
  }

}
