import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menu: any;
  public width: number = 0;
  constructor() {
    this.menu = [
      { id: 1, name: "HOME", link: "", description: "", detail: "", },
      { id: 2, name: "ABOUT", link: "", description: "", detail: "", },
      { id: 3, name: "SERVICES", link: "", description: "", detail: "", },
      { id: 4, name: "TEAM", link: "", description: "", detail: "", },
      { id: 5, name: "TESTMONIAL", link: "", description: "", detail: "", },
      { id: 6, name: "BLOG", link: "", description: "", detail: "", },
      { id: 7, name: "CONTACT", link: "", description: "", detail: "", },
    ];
    this.width = document.body.getBoundingClientRect().width;

  }

  ngOnInit() {    
    if (window['fixmenu']) {

      window['fixmenu']();
    }

  }

}
