import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { RegisterModel } from '../../models/register.model';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model:RegisterModel=new RegisterModel();
  constructor(private auth:AuthService,private toastr:ToastrService,private router:Router){

  }
  register(form:NgForm){
    if(form.valid){
      this.auth.register(this.model,res=>{
        localStorage.setItem("token",res.token);
        localStorage.setItem("user",JSON.stringify(res.user));
        this.toastr.success("Kullanici kaydi basariyla tmamalandi")
        this.router.navigateByUrl("/");
      });
    }
  }
}
