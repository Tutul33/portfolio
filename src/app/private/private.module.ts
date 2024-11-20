import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { ProfileEntryComponent } from './profile-entry/profile-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileListComponent } from './profile-list/profile-list.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ProfileEntryComponent,
    ProfileListComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule
  ]
})
export class PrivateModule { }
