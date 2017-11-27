import {NgModule} from "@angular/core";

//modules
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';




//components

import {MatMenuModule} from '@angular/material/menu';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';


@NgModule({
  imports:[
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule
  
  ],
  declarations:[
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule
    
    ]

})
export class SharedModule {}
