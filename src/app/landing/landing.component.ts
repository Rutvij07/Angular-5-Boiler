import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 
cityList = [
  {
    "id":1,
    "name":"India"
  },
  {
    "id":2,
    "name":"England"
  }
]
  constructor() { }
  ngOnInit() {
    console.log(this.cityList);
  }

}
