import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  sports = [
   {tValue: 'Cricket'},
   {tValue: 'Tennis'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
