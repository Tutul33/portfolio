import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent-routing.module';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
