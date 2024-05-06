import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getRecipes(search: string): Observable<any>{
    return this.http.get<any>(
      `https://api.edamam.com/api/recipes/v2?app_id=1cb8f37b&app_key=4845265f2e42f72b87c852b4b62967ec&q=${search}&type=public`
    )
  }

  getMainRecipes(): Observable<any>{
    return this.http.get<any>(
      `https://api.edamam.com/api/recipes/v2?app_id=1cb8f37b&app_key=4845265f2e42f72b87c852b4b62967ec&q=snack&type=public`
    )
  }

}
