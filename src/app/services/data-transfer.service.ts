import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  data: any;

  constructor(private http: HttpClient) { }

  setMeal(data: any){
    this.data = data;
  }

  getMeal(){
    return this.data;
  }
}
