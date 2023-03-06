import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductListWithOkComponent } from './pages/product-list-with-ok/product-list-with-ok.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.productListWithOkComponent);
  }
  title = 'app';


  @ViewChild(ProductListWithOkComponent) productListWithOkComponent: ProductListWithOkComponent | undefined;

  loadToListWithOkComponent() {
    console.log("tetiklendi")
    this.productListWithOkComponent?.load();
  }
}
