import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {


  name: string = 'ahmet'
  @Input() title: string | undefined;
  @Output() countClick = new EventEmitter<number>();
  count: number = 0;
  increaseCount() {
    this.count++;
    this.countClick.emit(this.count);
  }


  
}
