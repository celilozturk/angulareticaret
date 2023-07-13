import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template:`
  <router-outlet></router-outlet>
  <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#fff" type = "ball-clip-rotate"><p style="color: white" > Lutfen bekleyiniz </p></ngx-spinner>
  `,
  standalone:true,
  imports:[RouterModule,NgxSpinnerModule]
})
export class AppComponent {

}
