import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [{
  path: '',
  component: CategoryComponent,
  children: [
    { path: '', component: CategoryComponent },
    { path: 'category', component: CategoryComponent }
  ]
}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CategoryRoutingModule {
}

export const routedComponents = [
  CategoryComponent
];
