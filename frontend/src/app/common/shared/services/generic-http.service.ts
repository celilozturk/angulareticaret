import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  api:string="http://localhost:5000/api";

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  //auth/register
  post<T>(api:string,model:any,callBack:(res:T)=>void){
    this.http.post<T>(`${this.api}/${api}`,model,{}).subscribe({
      next:(res:T)=>callBack(res),
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.toastr.error(err.error.message)
      }
    });
  }

  get<T>(api:string,callBack:(res:T)=>void){
    this.http.get<T>(`${this.api}/${api}`).subscribe({
      next:(res:T)=>callBack(res),
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.toastr.error(err.error.message)
      }
    });
  }

}
