import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'https://localhost:44349/api';
  list : PaymentDetail [];

  constructor(private http:HttpClient) { }

  postPaymentDetail(){
  return this.http.post(this.rootURL + '/PaymentDetails', this.formData); //GET
  }

  deletePaymentDetail(id){
    return this.http.delete(this.rootURL + '/PaymentDetails/'+ id); //DELETE
    }

    putPaymentDetail(){
      return this.http.put(this.rootURL + '/PaymentDetails/'+ this.formData.PMId, this.formData); //PUT
      }

  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetails')
    .toPromise()
    .then(res => this.list = res as PaymentDetail [])
  }
}
