import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[box-testmonial]',
  templateUrl: './box-testmonial.component.html',
  styleUrls: ['./box-testmonial.component.css']
})
export class BoxTestmonialComponent implements OnInit {
  public data: any;
  constructor() {
    this.data = [
      { name: "Sadia Afrin", images: "../../../../assets/img/testmonial_1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { name: "Shisir Imran", images: "../../../../assets/img/testmonial_2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { name: "Jrin Sorkar", images: "../../../../assets/img/testmonial_3.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { name: "Imran Khan", images: "../../../../assets/img/testmonial_4.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { name: "Imran Khan", images: "../../../../assets/img/testmonial_1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { name: "Sadia Afrin", images: "../../../../assets/img/testmonial_2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ]
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (window['slides']) {

          window['slides']();
      }
  }, 1000);
  }

}
