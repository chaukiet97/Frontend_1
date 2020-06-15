import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[box-counter]',
  templateUrl: './box-counter.component.html',
  styleUrls: ['./box-counter.component.css']
})
export class BoxCounterComponent implements OnInit {
  public number:any;
  constructor() { 
    this.number=[
      {id:1,name:"User",value:"700"},
      {id:2,name:"Happy Claint",value:"900"},
      {id:3,name:"Project Complete",value:"300"},
      {id:4,name:"Coffee With Claint",value:"1200"},
    ]
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (window['number']) {
          window['number']();
      }
  }, 2000);
  }

}
