import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent {

  data:any;
  appointments:any;
  constructor(private appointmentService:ServiceService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getAppointmentData();
  }

  getAppointmentData(){
    this.appointmentService.getDataA().subscribe(res =>{
      console.log(res);
      this.appointments=res;
      this.appointments = this.appointments.existingPosts;
    })
  }

 

}
