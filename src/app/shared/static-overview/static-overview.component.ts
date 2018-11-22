import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-overview',
  templateUrl: './static-overview.component.html'
})
export class StaticOverviewComponent implements OnInit {
  headerText: string = 'MUSIC MATCH';
  headerDescriptionText: string = 'A place for music lovers. well, not every music lover but for audience with interest in specific category of music.';
  ngOnInit() {

  }
}
