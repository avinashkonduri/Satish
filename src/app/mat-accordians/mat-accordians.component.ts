import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

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
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
