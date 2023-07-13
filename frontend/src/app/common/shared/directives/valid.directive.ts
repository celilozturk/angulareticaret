import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValid]',
  standalone: true
})
export class ValidDirective {

  @Input() appValid:boolean=false;
  constructor(
    private el:ElementRef<any>
    //private el:ElementRef<HTMLInputElement>
  ) { }

  @HostListener("keyup") keyup(){
    if(this.appValid){
        this.el.nativeElement.className="form-control is-valid"
    }
    else{
      this.el.nativeElement.className="form-control is-invalid"
    }
  }

}
