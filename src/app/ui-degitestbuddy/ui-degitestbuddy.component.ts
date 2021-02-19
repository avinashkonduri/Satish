import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ak-ui-degitestbuddy',
  templateUrl: './ui-degitestbuddy.component.html',
  styleUrls: ['./ui-degitestbuddy.component.css']
})
export class UiDegitestbuddyComponent implements OnInit {
  testPlatforms!: string[];
  selectedPlatform!: string;

  constructor() { }

  ngOnInit(): void {
    this.testPlatforms = ["Desktop", "Mobile"];
    this.selectedPlatform = this.testPlatforms[0];
  }

}
