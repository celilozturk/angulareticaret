import { Injectable } from '@angular/core';
import { MessageResponseModel } from 'src/app/common/models/message.response.model';
import { PaginationResultModel } from 'src/app/common/models/pagination-result.model';
import { RequestModel } from 'src/app/common/models/request.mode';
import { GenericHttpService } from 'src/app/common/shared/services/generic-http.service';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:GenericHttpService) { }

  add(model:FormData,callBack:(res:MessageResponseModel)=>void){
    this.http.post<MessageResponseModel>("products/add",model,res=>callBack(res));
  }
  update(model:FormData,callBack:(res:MessageResponseModel)=>void){
    this.http.post<MessageResponseModel>("products/update",model,res=>callBack(res));
  }

  getAll(model:RequestModel,callBack:(res:PaginationResultModel<ProductModel[]>)=>void){
    this.http.post<PaginationResultModel<ProductModel[]>>("products/",model,res=>callBack(res));
  }

  removeById(model:any,callBack:(res:MessageResponseModel)=>void){
    this.http.post<MessageResponseModel>("products/removeById",model,res=>callBack(res));
  }
  changeActiveStatus(model:any,callBack:(res:MessageResponseModel)=>void){
    this.http.post<MessageResponseModel>("products/changeActiveStatus",model,res=>callBack(res));
  }
  getById(model:any,callBack:(res:ProductModel)=>void){
    this.http.post<ProductModel>("products/getById",model,res=>callBack(res));
  }
  removeImageByProductIdAndIndex(model:any,callBack:(res:MessageResponseModel)=>void){
    this.http.post<MessageResponseModel>("products/removeImageByProductIdAndIndex",model,res=>callBack(res));
  }
}
