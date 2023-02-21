import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './admin/visitor/visitor.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [

  {
    path: '', component: MainLayoutComponent, children: [

      { path: '', component: HomeComponent },
      { path: 'anasayfa', component: HomeComponent },
      { path: 'hakkimizda', component: AboutComponent },
      { path: 'galeri', component: GalleryComponent },
      { path: 'iletisim', component: ContactComponent }

    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [

      { path: 'ziyaretci', component: VisitorComponent }


    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
