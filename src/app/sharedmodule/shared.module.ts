import {NgModule} from "@angular/core";

//modules
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

//components
import {NavComponent} from '../nav/nav.component'

import {
  MdIconModule,
  MdMenuModule ,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule,
} from '@angular/material';


@NgModule({
  imports:[
    CommonModule,
    MdIconModule,
  	MdMenuModule ,
  	MdButtonModule,
    MdCardModule,
    FormsModule,
    MdInputModule,
    MdSelectModule,

  ],
  declarations:[
    NavComponent
  ],
  exports: [
    CommonModule,
    NavComponent,
    MdIconModule,
    MdMenuModule ,
    MdButtonModule,
    MdCardModule,
    FormsModule,
    MdInputModule,
    MdSelectModule,
    ]

})
export class SharedModule {}
