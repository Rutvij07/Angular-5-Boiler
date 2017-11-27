import {NgModule} from "@angular/core";

//modules
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";



//components

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';


@NgModule({
  imports:[
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  
  ],
  declarations:[
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  
    ]

})
export class SharedModule {}
