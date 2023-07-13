import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private toastr:ToastrService){

  }
  login(form:NgForm){
    if(form.valid){
      console.log(form.value);
    }
  }
}
