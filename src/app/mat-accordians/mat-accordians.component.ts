import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ak-mat-accordians',
  templateUrl: './mat-accordians.component.html',
  styleUrls: ['./mat-accordians.component.css']
})
export class MatAccordiansComponent implements OnInit {
  mode = new FormControl('over');
  shouldRun = true;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
