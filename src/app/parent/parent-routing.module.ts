import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
//   { path: 'signup', component: SignupComponent, data: { breadcrumb: '' } },
//   { path: 'forgotpassword', component: ForgotpasswordComponent, data: { breadcrumb: '' } },
//   { path: 'changePassword', component: ChangePasswordComponent, data: { breadcrumb: '' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
