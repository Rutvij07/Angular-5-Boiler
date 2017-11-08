import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  teams = [
   {
     teamA:'India',
     teamB:'New Zealand'
   },
   {
     teamA:'India',
     teamB:'Pakistan'
   },
   {
     teamA:'India',
     teamB:'Sri Lanka'
   },

 ];
  constructor() { }

  ngOnInit() {
  }

}
