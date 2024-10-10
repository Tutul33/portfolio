import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEntryComponent } from './profile-entry/profile-entry.component';

const routes: Routes = [
  { path: '', redirectTo: 'profileEntry', pathMatch: 'full' },
  { path: 'profileEntry', component: ProfileEntryComponent, data: { breadcrumb: 'Profile Entry' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
