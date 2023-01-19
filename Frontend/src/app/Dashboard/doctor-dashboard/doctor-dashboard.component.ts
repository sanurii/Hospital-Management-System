import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent {

  constructor(private toastr:ToastrService, private router:Router){}

  logout(){
    if( this.toastr.success('Logout Successfully!')){
      this.router.navigateByUrl('logindash');
    }else{
      this.toastr.error('Logout Failde!');
    }
  }
}
