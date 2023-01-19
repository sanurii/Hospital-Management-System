import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pharmacy-dashboard',
  templateUrl: './pharmacy-dashboard.component.html',
  styleUrls: ['./pharmacy-dashboard.component.css']
})
export class PharmacyDashboardComponent {

  constructor(private toastr:ToastrService, private router:Router){}

  logout(){
    if( this.toastr.success('Logout Successfully!')){
      this.router.navigateByUrl('logindash');
    }else{
      this.toastr.error('Logout Failde!');
    }
  }
}
