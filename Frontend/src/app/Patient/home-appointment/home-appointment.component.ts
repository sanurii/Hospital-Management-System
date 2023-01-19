import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-appointment',
  templateUrl: './home-appointment.component.html',
  styleUrls: ['./home-appointment.component.css']
})
export class HomeAppointmentComponent implements OnInit {

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

  deleteData(id:any){
    this.appointmentService.deleteDataA(id).subscribe(res =>{
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code),JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar: true
      })
      this.getAppointmentData();
    })
  }
}
