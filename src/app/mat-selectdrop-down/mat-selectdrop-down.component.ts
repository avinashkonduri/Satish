import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../services/service-name.service';
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
  newArray!: any;
  urls!: string[];
  foods: Food[] = [
    {value: 'acq', viewValue: 'ACQ'},
    {value: 'lobby', viewValue: 'Lobby'},
    {value: 'pro', viewValue: 'Promostions'}
  ];

  toppingList = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat','led'];
  toppingList1 = ['Responsible Gam', 'Tournment', 'Banking', 'BonusWheel', 'Livechat','led','ALL BRE','ALL FGA'];
  selectedToppings!: string[];

  isMultiSelect: boolean= true;
  dataInfo: any;
  constructor(private casinoInfo: ServiceNameService) { }

  ngOnInit(): void {
    this.newArray = ['LEDMOBLE'];
    this.urls = [];
    this.getCasinoInfo();
    //this.isMultiSelect = false;
  }

  getCasinoInfo(){
    this.casinoInfo.getURLData().subscribe(info => {
      this.dataInfo = info;
    });
  }
  getSelected(selected: string[]){

    if(selected == ["ALL_BRE"]){
      this.dataInfo.forEach((element: string[]) => {
        if(selected == element){
          console.log(selected);
        }
      });
      this.dataInfo.forEach((element: { [x: string]: string; }) => {
          this.newArray.push(element["Url"])
      });
      // this.newArray = ["LEDMOBILE"];

      this.selectedValue = this.newArray[0] as unknown as string[];
    }
  }
  getSelected1(selected: string[]){
    if(selected == ["ALL BRE"]){
      this.newArray = [];
      this.selectedUrl = [];
      this.urls = [];
      this.newArray = this.dataInfo["ALL BRE"];
      this.newArray.forEach((element: { Url: string; }) => {
          this.urls.push(element.Url);
      });
      this.selectedUrl = this.urls;
    }
    else if(selected == ["ALL FGA"]){
      this.newArray = [];
      this.selectedUrl = [];
      this.urls = [];
      this.newArray = this.dataInfo["ALL FGA"];
      this.newArray.forEach((element: { Url: string; }) => {
          this.urls.push(element.Url);
      });
      this.selectedUrl = this.urls;
    }
   //this.selectedUrl = this.urls
  }
  ngAfterContentInit() {
    this.getSelected(this.selectedValue);
  }

}
