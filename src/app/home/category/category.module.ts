import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CategoryRoutingModule, routedComponents } from './category.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
  exports: [

  ]
})

export class CategoryModule { }
