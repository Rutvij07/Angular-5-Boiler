import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MatchViewComponent } from './matchview.component';



const matchviewRoutes : Routes = [
    { path: '', component:  MatchViewComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(matchviewRoutes) ],
  exports: [ RouterModule ]
})

export class MatchViewRoutingModule {}
