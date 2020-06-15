import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[box-teammember]',
  templateUrl: './box-teammember.component.html',
  styleUrls: ['./box-teammember.component.css']
})
export class BoxTeammemberComponent implements OnInit {
  public member:any=[];
 
  constructor() {
    this.member=[
      {id:1,image:"../../../../assets/img/3.jpg",name:"SHISIR IMRAN", job:"CEO"},
      {id:2,image:"../../../../assets/img/1.jpg",name:"SADIA AFRIN", job:"DESIGNER"},
      {id:3,image:"../../../../assets/img/2.jpg",name:"JOHN DOE", job:"DEVELOPER"},
      {id:4,image:"../../../../assets/img/4.jpg",name:"JOHN DOE", job:"DESIGNER"},
    ];

  }

  ngOnInit(): void {

   
  }

}
