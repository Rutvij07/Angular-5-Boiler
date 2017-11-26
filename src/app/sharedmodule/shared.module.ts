import {NgModule} from "@angular/core";

//modules
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

//components

import {
  
} from '@angular/material';


@NgModule({
  imports:[
    CommonModule,
  

  ],
  declarations:[
  ],
  exports: [
    CommonModule,
    FormsModule,
    ]

})
export class SharedModule {}
