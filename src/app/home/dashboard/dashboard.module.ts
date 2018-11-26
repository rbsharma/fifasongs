import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule, routedComponents } from './dashboard.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
  exports: [

  ]
})

export class DashboardModule { }
