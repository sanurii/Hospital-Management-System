import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient:HttpClient) { }

  getData(){
    return this.httpclient.get('http://localhost:5000/employees')
  }

  insertData(data:any){
    return this.httpclient.post('http://localhost:5000/employee/save', data)
  }


  geDataById(id:any){
    return this.httpclient.get('http://localhost:5000/employee/'+id)
  }


  deleteData(id:any){
    return this.httpclient.delete('http://localhost:5000/employee/delete/'+id)
  }

  UpdateData(id:any, data:any){
    return this.httpclient.put('http://localhost:5000/employee/update/'+id, data)
  }

  //........................//
  
  getDataP(){
    return this.httpclient.get('http://localhost:5000/pcheck')
  }

  insertDataP(data:any){
    return this.httpclient.post('http://localhost:5000/pcheck/save', data)
  }


  geDataByIdP(id:any){
    return this.httpclient.get('http://localhost:5000/pcheck/'+id)
  }


  deleteDataP(id:any){
    return this.httpclient.delete('http://localhost:5000/pcheck/delete/'+id)
  }

  UpdateDataP(id:any, data:any){
    return this.httpclient.put('http://localhost:5000/pcheck/update/'+id, data)
  }


  //.........................//

  getDataA(){
    return this.httpclient.get('http://localhost:5000/appbooking')
  }

  insertDataA(data:any){
    return this.httpclient.post('http://localhost:5000/appbooking/save', data)
  }


  geDataByIdA(id:any){
    return this.httpclient.get('http://localhost:5000/appbooking/'+id)
  }


  deleteDataA(id:any){
    return this.httpclient.delete('http://localhost:5000/appbooking/delete/'+id)
  }

  UpdateDataA(id:any, data:any){
    return this.httpclient.put('http://localhost:5000/appbooking/update/'+id, data)
  }


  //.....................//

  
  getDataPP(){
    return this.httpclient.get('http://localhost:5000/pharmacy')
  }

  insertDataPP(data:any){
    return this.httpclient.post('http://localhost:5000/pharmacy/save', data)
  }


  geDataByIdPP(id:any){
    return this.httpclient.get('http://localhost:5000/pharmacy/'+id)
  }


  deleteDataPP(id:any){
    return this.httpclient.delete('http://localhost:5000/pharmacy/delete/'+id)
  }

  UpdateDataPP(id:any, data:any){
    return this.httpclient.put('http://localhost:5000/pharmacy/update/'+id, data)
  }

}
