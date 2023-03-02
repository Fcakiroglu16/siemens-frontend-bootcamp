import { Component } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent {
  i: number = 0;
  constructor(private subjectProviderService: SubjectProviderService) {


    setInterval(() => {


      this.i++;
      this.subjectProviderService.publish(this.i);

      if (this.i > 5) {
        this.subjectProviderService.complete();
      }


    }, 1000);

    //2. way
    //setInterval(function () { }, 1000)


  }




}
