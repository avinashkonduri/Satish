import { ChangeDetectorRef, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ak-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {
  foods: Food[] = [
    { value: 'acq', viewValue: 'ACQ' },
    { value: 'lobby', viewValue: 'Lobby' },
    { value: 'pro', viewValue: 'Promostions' }
  ];
  checked: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  change(e: any) {
    if (this.checked) {
      if (confirm("Are you sure")) {
        this.checked = !this.checked;
        console.log("toggle")
      }
      else {
        e.source.checked = true;
        console.log("toggle should not change if I click the cancel button")
      }
    } else {
      this.openDialog();
      this.checked = !this.checked;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogDemo, {
      width: '750px',
      // data: { value: this.foods[0].value, viewValue: this.foods[0].viewValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'dialog-demo',
  templateUrl: 'dialog.component.html',
})
export class MatDialogDemo implements OnInit {
  selectedValue!: string;
  selectedCar!: string;
  foods: Food[] = [
    { value: 'acq', viewValue: 'ACQ' },
    { value: 'lobby', viewValue: 'Lobby' },
    { value: 'pro', viewValue: 'Promostions' }
  ];
  toppingList!: string[]; // Need add testPatterns!= string[] , testLocations!= string[]
  selectedToppings: any;

  isMultiSelect: boolean = true;
  constructor(public dialogRef: MatDialogRef<MatDialogDemo>,
    ) { }
  ngOnInit(): void {
    this.toppingList = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat']; // this.testLocations = []

    // confirm(this.data.viewValue);
    // this.selectedValue = this.data.value;
  }

  getSelected(selected: any) {
    if (selected == 'lobby') {
      this.toppingList = ['Responsible Gam1', 'Tournment1', 'Banking1', 'BonusWheel1', 'Livechat1'];
      this.isMultiSelect = false;
    }
    else if (selected == 'pro') {
      this.toppingList = ['Responsible Gam2', 'Tournment2', 'Banking2', 'BonusWheel2', 'Livechat2'];
      this.isMultiSelect = true;
    }
    else if (selected == 'acq') {
      this.toppingList = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat'];
      this.isMultiSelect = true;
    }
  }
  ngAfterContentInit() {
    this.getSelected(this.selectedValue);
  }
}
