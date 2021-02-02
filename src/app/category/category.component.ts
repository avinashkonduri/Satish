import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'category',
  template: '<h1> Hello</h1> <h3>',
  styles:['h1{background:yellow;color:white}']
})

export class Category implements OnInit{

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
