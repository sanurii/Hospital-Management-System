import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-pharmacy',
  templateUrl: './home-pharmacy.component.html',
  styleUrls: ['./home-pharmacy.component.css']
})
export class HomePharmacyComponent implements OnInit {

  search: any;
  data:any;
  pharmacys:any;
  constructor(private pharmacyService:ServiceService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getPharmacyData();
    this.pharmacyService.getDataPP()
  }

  getPharmacyData(){
    this.pharmacyService.getDataPP().subscribe(res =>{
      console.log(res);
      this.pharmacys=res;
      this.pharmacys = this.pharmacys.existingPosts;
    })
  }

  deleteData(id:any){
    this.pharmacyService.deleteDataPP(id).subscribe(res =>{
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code),JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar: true
      })
      this.getPharmacyData();
    })
  }
}
