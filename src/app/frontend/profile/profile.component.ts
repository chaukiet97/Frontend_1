import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/globals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ws:GlobalsService) { }

  ngOnInit(): void {
  }

}
