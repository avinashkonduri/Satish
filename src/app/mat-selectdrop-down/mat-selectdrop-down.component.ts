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
  selectedValue!: string[];
  selectedCar!: string;
  newArray!: string[];
  foods: Food[] = [
    {value: 'acq', viewValue: 'ACQ'},
    {value: 'lobby', viewValue: 'Lobby'},
    {value: 'pro', viewValue: 'Promostions'}
  ];

  toppingList = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat','led'];

  selectedToppings!: string[];

  isMultiSelect: boolean= true;
  constructor() { }

  ngOnInit(): void {
    this.newArray = ['LEDMOBLE'];
    //this.isMultiSelect = false;
  }

  getSelected(selected: string[]){

    if(selected == ["led"]){
      this.newArray = ["LEDMOBILE"];
      this.selectedValue = this.newArray[0] as unknown as string[];
    }    // if(selected[0] == 'lobby'){
    //   this.toppingList = ['Responsible Gam1', 'Tournment1', 'Banking1', 'BonusWheel1', 'Livechat1'];
    //   this.isMultiSelect = false;
    // }
    // else if(selected[0] == 'pro'){
    //   this.toppingList= ['Responsible Gam2', 'Tournment2', 'Banking2', 'BonusWheel2', 'Livechat2'];
    //   this.isMultiSelect = true;
    // }
    // else if(selected[0] == 'acq'){
    //   this.toppingList = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat'];
    //   this.isMultiSelect = true;
    // }
  }
  ngAfterContentInit() {
    this.getSelected(this.selectedValue);
  }

}
