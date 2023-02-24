import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent {


  @Output() searchEvent = new EventEmitter<number>();
  
  
  search(text: any) {
  
    this.searchEvent.emit(text as number);
  }
}
