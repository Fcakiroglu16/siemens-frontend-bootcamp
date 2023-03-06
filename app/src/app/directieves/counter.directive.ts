import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {

  constructor(private el: ElementRef) { }


  @HostListener('keyup') onkeyup() {

    let valLength = this.el.nativeElement.value.length;
    console.log(valLength);
    if (valLength > 5) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
    else {
      this.el.nativeElement.style.backgroundColor = '';
    }


  }

}
