import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from 'src/app/components/categories/models/category.model';
import { CategoryService } from 'src/app/components/categories/services/category.service';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  categories:CategoryModel[]=[];
  images:File[]=[];
  imageUrls:any[]=[];
  productId:string="";
  product:ProductModel=new ProductModel();

  constructor(private category:CategoryService,private toastr:ToastrService,private _product:ProductService,private router:Router,private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(res=>{
      this.productId=res["value"];
      this.getById();
    })
  }
  ngOnInit(): void {
   this.getCategories();
  }
  getById(){
    let model={_id:this.productId};
      this._product.getById(model,res=>this.product=res)
  }
  getCategories(){
    this.category.getAll(res=>this.categories=res);
  }

  getImages(event:any){
    const file:File[]=Array.from(event.target.files);
    this.images.push(...file);

    for (let index = 0; index < event.target.files.length; index++) {
      const element = event.target.files[index];
      const reader =new FileReader();
      reader.readAsDataURL(element);

      reader.onload=()=>{
        const imageUrl=reader.result as string;
        this.addImage(imageUrl,file);
      }
    }

  }

  addImage(imageUrl:string,file:any){
    this.imageUrls.push(
      {imageUrl:imageUrl,name:file.name,size:file.size}
      )
  }
  update(form:NgForm){
    if(form.value["categoriesSelect"].length ==0){
      this.toastr.error("Kategori secimi yapmadiniz!");
      return;
    }
    if(form.valid){
     let product=form.value;
     let categories:string[]=product["categoriesSelect"];
     let price=product["price"];
     price =price.toString().replace(",",".");
     let formData=new FormData();
     formData.append("_id",this.product._id);
     formData.append("name",this.product.name);
     formData.append("price",price);
     formData.append("stock",product["stock"]);
     for(const category of categories){
       formData.append("categories",category);

     }

     if(this.images != undefined){
        for(const image of this.images){
          formData.append("images",image,image.name);
        }
     }
     this._product.update(formData,res=>{
      this.toastr.info(res.message);
      this.router.navigateByUrl("/products");
     })
    }
  }
  deleteImage(_id:string,index:number){
    let model={
      _id:_id,
      index:index
    }
  this._product.removeImageByProductIdAndIndex(model,res=>{
      this.toastr.warning(res.message);
      this.getById();
  })
  }
}
