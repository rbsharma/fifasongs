import { Component, OnInit, Input } from '@angular/core';
import { InterestCategoryModel } from '../../models/category.model';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html'
})
export class CategoryOverviewComponent implements OnInit {

  @Input() category: InterestCategoryModel;
  headerText: string = 'MUSIC MATCH';
  headerDescriptionText: string = 'A place for music lovers. well, not every music lover but for audience with interest in specific category of music.';
  ngOnInit() {
    //console.log(this.category);
  }
}
