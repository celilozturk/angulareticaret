import { Injectable } from '@angular/core';
import { GenericHttpService } from 'src/app/common/shared/services/generic-http.service';
import { CategoryModel } from '../models/category.model';
import { MessageResponseModel } from 'src/app/common/models/message.response.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:GenericHttpService) { }

  getAll(callBack:(res:CategoryModel[])=>void){
    this.http.get<CategoryModel[]>("categories",res=>callBack(res));
  }

  add(name:string,callBack:(res:MessageResponseModel)=>void){
    let model={name:name};
    this.http.post<MessageResponseModel>("categories/add",model,res=>callBack(res));
  }
  update(model:CategoryModel,callBack:(res:MessageResponseModel)=>void){
    this.http.post<MessageResponseModel>("categories/update",model,res=>callBack(res));
  }
  removeById(_id:string,callBack:(res:MessageResponseModel)=>void){
    let model={_id:_id};
    this.http.post<MessageResponseModel>("categories/removeById",model,res=>callBack(res));
  }
}
