import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit  {

  id: any;
  data: any;
  appoinment: any;
  submitted: any;

  constructor(private appointmentService: ServiceService, private route: ActivatedRoute,
    private toastr: ToastrService, private fb:FormBuilder, private router:Router
  ) { 
    this.appoinment = fb.group(
      {
        title: '',
        pname: '',
        mobile: '',
        date: '', 
        email:'', 
        nicpass: '', 
        area: '', 
      }
    )
  }

  get f(){
    return this.appoinment.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getdataa();
  }

  getdataa() {
    this.appointmentService.geDataByIdA(this.id).subscribe(res => {
      this.data = res;
      this.appoinment = this.data.post;
      console.log(this.appoinment)
    })
  }

  updateData() {
    // this.submitted=true;
    
    // if(this.patientchecking.invalid){
    //  return;
    // }
    this.appointmentService.UpdateDataA(this.id, this.appoinment).subscribe(res =>{
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
        timeOut: 1000,
        progressBar: true,
      });
      this.router.navigateByUrl('Home-Appointment');
     });
  }
}
