import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'ak-testimg',
  templateUrl: './testimg.component.html',
  styleUrls: ['./testimg.component.css']
})
export class TestimgComponent implements OnInit {

  foodArray: string[] = ['fruits','vegitables'];

  animals: Animal[] = [
    {name:'dog',sound:'Woff!'},
    {name:'cat',sound:'Meow!'},
    {name:'cow',sound:'Moo!'}
  ]

  food: [] = []
  value: any;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(evt: any){
      this.animals.forEach(element => {
            if(element.name == evt.target.value){
                console.log(element.sound);
            }
      })
  }

  onKey(event: any) {

    this.value +=event.target.value + ' | ';
  }
}
