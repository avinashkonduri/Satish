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
  selectedUrl!: string[];
  selectedCar!: string;
  newArray!: string[];
  urls!: string[];
  foods: Food[] = [
    {value: 'acq', viewValue: 'ACQ'},
    {value: 'lobby', viewValue: 'Lobby'},
    {value: 'pro', viewValue: 'Promostions'}
  ];

  toppingList = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat','led'];
  toppingList1 = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat','led'];
  selectedToppings!: string[];

  isMultiSelect: boolean= true;
  constructor() { }

  ngOnInit(): void {
    this.newArray = ['LEDMOBLE'];
    this.urls = ['url1','url2','url3','url4'];
    //this.isMultiSelect = false;
  }

  getSelected(selected: string[]){

    if(selected == ["led"]){
      this.newArray = ["LEDMOBILE"];
      this.selectedValue = this.newArray[0] as unknown as string[];
    }
  }
  getSelected1(selected: string[]){

   this.selectedUrl = this.urls
  }
  ngAfterContentInit() {
    this.getSelected(this.selectedValue);
  }

}
