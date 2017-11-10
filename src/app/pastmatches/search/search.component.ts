import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  show:boolean = false
  searchMatch:any;
  tournaments = [
   {tValue: 'BPL'},
   {tValue: 'CPL'},
   {tValue: 'IPL'},
   {tValue: 'Champions Trophy'}
  ];
  constructor() { }

  ngOnInit() {
  }
   find(){
     this.show = true;
   }
}
