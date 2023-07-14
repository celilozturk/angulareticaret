import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { CategoryService } from '../categories/services/category.service';
import { CategoryModel } from '../categories/models/category.model';
import { RequestModel } from 'src/app/common/models/request.mode';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
categories:CategoryModel[]=[];
request:RequestModel=new RequestModel();

constructor(private _category:CategoryService){

}
  ngOnInit(): void {
    this.getCategories();
  }
getCategories(){
  this._category.getAll(res=>this.categories=res);
}
changeCategory(categoryName:string){
  this.request.categoryName=categoryName;
}
}
