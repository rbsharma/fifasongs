import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CategoryRoutingModule, routedComponents } from './category.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
  exports: [

  ]
})

export class CategoryModule { }
