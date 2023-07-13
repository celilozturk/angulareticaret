import { Injectable } from '@angular/core';
import { GenericHttpService } from 'src/app/common/shared/services/generic-http.service';
import { LoginResponseModel } from '../models/login-response.model';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:GenericHttpService) { }

  login(model:LoginModel,callBack:(res:LoginResponseModel)=>void){
    this.http.post<LoginResponseModel>("auth/login",model,res=>callBack(res));
  }
}
