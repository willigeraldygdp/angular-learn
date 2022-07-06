import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import {HeroService} from "../hero.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FormsModule,RouterModule],
  providers: [HeroService]
})
export class DashboardModule {}
