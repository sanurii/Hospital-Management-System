import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit-pharmacy',
  templateUrl: './edit-pharmacy.component.html',
  styleUrls: ['./edit-pharmacy.component.css']
})
export class EditPharmacyComponent implements OnInit {

  id: any;
  data: any;
  pharmacy: any;
  submitted: any;

  constructor(private pharmacyService: ServiceService, private route: ActivatedRoute,
    private toastr: ToastrService, private fb:FormBuilder, private router:Router
  ) { 
    this.pharmacy = fb.group(
      {
        medicineName: '',
        type: '',
        quantity: '',
        expirationDate: '', 
        price:'', 
      }
    )
  }

  get f(){
    return this.pharmacy.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getdatapp();
  }

  getdatapp() {
    this.pharmacyService.geDataByIdPP(this.id).subscribe(res => {
      this.data = res;
      this.pharmacy = this.data.post;
      console.log(this.pharmacy)
    })
  }

  updateData() {
    // this.submitted=true;
    
    // if(this.patientchecking.invalid){
    //  return;
    // }
    this.pharmacyService.UpdateDataPP(this.id, this.pharmacy).subscribe(res =>{
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code),JSON.stringify(this.data.success),{
        timeOut: 1000,
        progressBar: true,
      });
      this.router.navigateByUrl('Home-Pharmacy');
     });
  }
}
