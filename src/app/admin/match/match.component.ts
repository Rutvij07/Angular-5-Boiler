import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  sports = [
   {tValue: 'Cricket'},
   {tValue: 'Tennis'},
  ];


  tournaments=[
    {tValue: 'WTP Cup'},
    {tValue: 'Hero Cup'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
