import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[box-work]',
  templateUrl: './box-work.component.html',
  styleUrls: ['./box-work.component.css']
})
export class BoxWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (window['activeTab']) {
      window['activeTab']();
    }
  }

}
