import { Component, OnInit  } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-patient-checking',
  templateUrl: './home-patient-checking.component.html',
  styleUrls: ['./home-patient-checking.component.css']
})
export class HomePatientCheckingComponent implements OnInit {

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

  deleteData(id:any){
    this.PatientCheckingService.deleteDataP(id).subscribe(res =>{
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code),JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar: true
      })
      this.getPatientCheckingData();
    })
  }
}
