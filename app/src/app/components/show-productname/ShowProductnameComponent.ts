import {
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-show-productname',
  templateUrl: './show-productname.component.html',
  styleUrls: ['./show-productname.component.css'],
})
export class ShowProductnameComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy
{
  @Input() productName: string = '';

  constructor() {
    console.log('Constructor method');

    //Değişkenlerimize ilk değerleri vermek için kullanacağız.
    this.productName = '';
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy method');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit method');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck method');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit method');
  }
}
