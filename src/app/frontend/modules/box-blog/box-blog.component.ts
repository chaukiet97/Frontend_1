import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[box-blog]',
  templateUrl: './box-blog.component.html',
  styleUrls: ['./box-blog.component.css']
})
export class BoxBlogComponent implements OnInit {
  public blog:any;
  constructor() {
    this.blog=[
      {id:1,name:"Advance Web-Design", image:"../../../../assets/img/blog-1.jpg",view:900,like:700,day:"27",moth:"Jun",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ..."},
      {id:2,name:"Advance Developement", image:"../../../../assets/img/blog-2.jpg",view:900,like:700,day:"07",moth:"May",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ..."},
      {id:3,name:"Digital Mearkiting", image:"../../../../assets/img/blog-34.jpg",view:900,like:700,day:"17",moth:"Nov",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ..."},
    ]
  }

  ngOnInit(): void {
  }

}
