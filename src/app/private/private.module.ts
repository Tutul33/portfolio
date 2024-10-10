import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { ProfileEntryComponent } from './profile-entry/profile-entry.component';


@NgModule({
  declarations: [
    ProfileEntryComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
