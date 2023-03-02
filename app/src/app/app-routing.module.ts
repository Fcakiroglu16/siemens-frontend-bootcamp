import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AuthGuard, canActivateNewFormat } from './auth.guard';
import { LoginComponent } from './main/login/login.component';
import { ChildGuard } from './child.guard';
import { EditGuard, EditGuardNewType } from './edit.guard';
import { CanOrderLoad } from './canload';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin', canActivate: [AuthGuard, canActivateNewFormat], canActivateChild: [ChildGuard], children: [
      { path: '', component: AdminHomeComponent },
      { path: 'home', component: AdminHomeComponent },
      { path: 'user-list', component: UserListComponent, canDeactivate: [EditGuardNewType] }


    ]
  },
  {
    path: "lazy-order", canLoad:[CanOrderLoad], loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
