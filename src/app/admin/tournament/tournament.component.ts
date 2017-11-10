import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  sportsValue:any;
  searchMatch:any;
  sports = [
   {tValue: 'Cricket'},
   {tValue: 'Tennis'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
