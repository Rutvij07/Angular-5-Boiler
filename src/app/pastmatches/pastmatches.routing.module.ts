import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PastMatchComponent } from './pastmatches.component';



const pastmatchRoutes : Routes = [
    { path: '', component:  PastMatchComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(pastmatchRoutes) ],
  exports: [ RouterModule ]
})

export class PastMatchRoutingModule {}
