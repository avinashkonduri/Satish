import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ChartType } from "chart.js";
import { element } from 'protractor';
import { AnyARecord } from 'dns';
import { BaseChartDirective, Label, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'ak-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild(BaseChartDirective)
  public chart!: BaseChartDirective;

  userList?: User[];
  activeCount: any[] = [];
  inActiveCount: any[] = [];
  public doughnutOptions: any = {
    responsive: true
  };
 // Doughnut
 public doughnutChartLabels: Label[] = [];
 public doughnutChartData: number[] = [];
 public doughnutChartType: ChartType = "doughnut";
 public doughnutColors: Array < any > = [{
  backgroundColor: ['#fc5858', '#19d863', '#fdf57d','#5B87DA'],
  borderColor: ['rgba(252, 235, 89, 0.2)', 'rgba(77, 152, 202, 0.2)', 'rgba(241, 107, 119, 0.2)','rgb(255, 255,255)']
}];
  chart1: any;
  labels: any[] = [];
  tempObj?: {};
  totalUser: any[] = [];
  regCount: any[] = [];
  logCount: any[] = [];


  constructor(private userService: UserService) { }
  // chart?: Chart;

  ngOnInit(): void {
    this.getUserList();
    this.getUserLog();
  }
  getUserList(){
    this.userService.getUserList().subscribe(userData => {
          this.userList = userData.data;
          this.totalUser = userData.data.length;
          //this.activeCount = this.userList?.filter((obj)=>obj.status === 'Active').length;
          //this.inActiveCount = this.userList?.filter((obj)=>obj.status === 'Inactive').length;
          console.log(this.activeCount, this.inActiveCount);

    },error => {
        alert('failed to fetch the user list');
    })
  }
  getUserLog(){
      this.userService.getUserlogs().subscribe(data => {
        for(var i in data){
          var key = i;
          var val = data[i];
          for(var j in val){
              var sub_key = j;
              var sub_val = val[j];
              this.labels.push(sub_key)

          }
      }
      this.doughnutChartLabels = this.labels.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
 });
      console.log(this.labels);
        for(let i=0;i<data.length;i++){
            this.regCount.push(data[i]["Registred"]);
          this.logCount.push(data[i]["Login"]);
          this.activeCount.push(data[i]["Active"]);
          this.inActiveCount.push(data[i]["Active"]);
         //this.doughnutChartData.push([data[i]["Registred"]]);
        }
        this.doughnutChartData.push(...this.regCount,...this.logCount,...this.activeCount,...this.inActiveCount);
        this.chart.chart.update();
        console.log(this.doughnutChartLabels);
        console.log(this.doughnutChartData);
        console.log(this.logCount);
        console.log(this.regCount);

    });
  }


}
