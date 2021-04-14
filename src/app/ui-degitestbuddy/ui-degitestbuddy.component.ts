import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../services/service-name.service';

@Component({
  selector: 'ak-ui-degitestbuddy',
  templateUrl: './ui-degitestbuddy.component.html',
  styleUrls: ['./ui-degitestbuddy.component.css']
})
export class UiDegitestbuddyComponent implements OnInit {
  testPlatforms!: string[];
  selectedPlatform!: string;
  big6: string[] = [];
  testButtons: string[] = ['Test1', 'Test2', 'Test3', 'Test4']
  constructor(private urlService: ServiceNameService) { }

  generateUrl() {
    this.urlService.getUrlInfo().subscribe(
        access => {
          console.log(access);
        });
}
  ngOnInit(): void {
    this.testPlatforms = ["Desktop", "Mobile"];
    this.selectedPlatform = this.testPlatforms[0];
    this.generateUrl();
    //this.myBig6();
  }

  myBig6() {
    this.big6 = ['Load Website', 'Tracking', 'Login to casino', 'Load Website1', 'Tracking1', 'Login to casino1']
  }

  testCase1() {
    this.big6 = ['Load Website', 'Tracking', 'Login to casino', 'Load Website1', 'Tracking1', 'Login to casino1']
  }
  getTestCases(evt: any) {
    console.log(evt.target.value);
    switch (evt.target.value) {
      case 'Test1':
        this.big6 = ['Load Website', 'Tracking', 'Login to casino', 'Load Website1', 'Tracking1', 'Login to casino1'];
        break;
      case 'Test2':
        this.big6 = ['Load Website2', 'Tracking2', 'Login to casino2', 'Load Website12', 'Tracking12', 'Login to casino12'];
        break;
      case 'Test3':
        this.big6 = ['Load Website3', 'Tracking3', 'Login to casino3', 'Load Website13', 'Tracking13', 'Login to casino13'];
        break;
      case 'Test4':
        this.big6 = ['Load Website4', 'Tracking4', 'Login to casino4', 'Load Website14', 'Tracking14', 'Login to casino14'];
        break;
    }
  }
}
