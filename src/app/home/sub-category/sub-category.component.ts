import { Component, OnInit, Input } from '@angular/core';

import { InterestCategoryYearModel, SongModel } from '../../models/category.model';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html'
})
export class SubCategoryComponent implements OnInit {
  @Input() subCategory: InterestCategoryYearModel = new InterestCategoryYearModel();
  ngOnInit() {
    console.log(this.subCategory);
  }
}
