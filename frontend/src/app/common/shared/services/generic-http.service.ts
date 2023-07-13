import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  api:string="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  //auth/register
  post<T>(api:string,model:any,callBack:(res:T)=>void){
    this.http.post<T>(`${this.api}/${api}`,model,{}).subscribe({
      next:(res:T)=>callBack(res),
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    });
  }

  get<T>(api:string,callBack:(res:T)=>void){
    this.http.get<T>(`${this.api}/${api}`).subscribe({
      next:(res:T)=>callBack(res),
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    });
  }

}
