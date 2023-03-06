import { AfterViewInit, Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'ahmet';
  surname: string = 'yıldız';
  title = 'app';

  change() {
    this.name = "mehmet";
    this.surname = "çavdarlı";
  }

}
