import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { ServiceNameService } from '../services/service-name.service';

@Component({
  selector: 'ak-mat-accordians',
  templateUrl: './mat-accordians.component.html',
  styleUrls: ['./mat-accordians.component.css']
})
export class MatAccordiansComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  dataInfo!: string[];
  mode = new FormControl('over');
  shouldRun = true;
  panelOpenState = false;
  constructor(private casinoInfo: ServiceNameService) { }

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

  openMyMenu() {
    this.trigger.toggleMenu();
  }
  closeMyMenu() {
    this.trigger.closeMenu();
    console.log('close')
  }
}
