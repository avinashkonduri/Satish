import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ak-mat-selectdrop-down',
  templateUrl: './mat-selectdrop-down.component.html',
  styleUrls: ['./mat-selectdrop-down.component.css']
})
export class MatSelectdropDownComponent implements OnInit {
  selectedValue!: string;
  selectedCar!: string;

  foods: Food[] = [
    {value: 'acq', viewValue: 'ACQ'},
    {value: 'lobby', viewValue: 'Lobby'},
    {value: 'pro', viewValue: 'Promostions'}
  ];

  toppingList = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat'];
  selectedToppings: any;

  isMultiSelect: boolean= true;
  constructor(private cdr: ChangeDetectorRef,) { }

  ngOnInit(): void {
    //this.isMultiSelect = false;
  }

  getSelected(selected: any){
    if(selected == 'lobby'){
      this.toppingList = ['Responsible Gam1', 'Tournment1', 'Banking1', 'BonusWheel1', 'Livechat1'];
      this.isMultiSelect = false;
    }
    else if(selected == 'pro'){
      this.toppingList= ['Responsible Gam2', 'Tournment2', 'Banking2', 'BonusWheel2', 'Livechat2'];
      this.isMultiSelect = true;
    }
    else if(selected == 'acq'){
      this.toppingList = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat'];
      this.isMultiSelect = true;
    }
  }
  ngAfterContentInit() {
    this.getSelected(this.selectedValue);
  }
}
