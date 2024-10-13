import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { StatsComponent } from './stats/stats.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    StatsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
