import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css'],
})
export class PostUpdateComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.queryParams['id'];

    console.log(id);

    this.activatedRoute.queryParamMap.subscribe((x) => {
      console.log('queryParamMap', x);
      console.log('queryParamMap:' + x.get('id'));
    });

    this.activatedRoute.queryParams.subscribe((x: any) => {
      console.log('queryParams', x.id);
    });
  }
}
