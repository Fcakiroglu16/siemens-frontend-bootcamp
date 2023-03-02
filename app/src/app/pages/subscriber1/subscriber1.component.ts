import { Component, OnInit } from '@angular/core';
import { SubjectProviderService } from '../../subject/subject-provider.service';

@Component({
  selector: 'page-subscriber1',
  templateUrl: './subscriber1.component.html',
  styleUrls: ['./subscriber1.component.css']
})
export class Subscriber1Component implements OnInit {


  selectedItemValue: number | undefined;
  name: string | undefined;
  constructor(private subjectProviderService: SubjectProviderService) { }
  ngOnInit(): void {

    this.subjectProviderService.mySelectMenuObservable.subscribe(x => {
      this.selectedItemValue = x as number;
    })

    this.subjectProviderService.myNameObservable.subscribe(x => {
      this.name = x as string;
    })
  }

}
