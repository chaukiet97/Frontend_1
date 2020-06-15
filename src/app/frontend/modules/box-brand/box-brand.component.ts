import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[box-brand]',
  templateUrl: './box-brand.component.html',
  styleUrls: ['./box-brand.component.css']
})
export class BoxBrandComponent implements OnInit {
  public image=[];

  constructor() {
    this.image=[
      {id:1,image:"../../../../assets/img/brand-1.png"},
      {id:2,image:"../../../../assets/img/brand-2.png"},
      {id:3,image:"../../../../assets/img/brand-3.png"},
      {id:4,image:"../../../../assets/img/brand-4.png"},
      {id:5,image:"../../../../assets/img/brand-5.png"},

    ]
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (window['brand']) {

          window['brand']();
      }
  }, 1000);
  }

}
