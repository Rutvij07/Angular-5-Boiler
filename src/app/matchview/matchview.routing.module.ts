import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const matchviewRoutes : Routes = []

@NgModule({
  imports: [ RouterModule.forChild(matchviewRoutes) ],
  exports: [ RouterModule ]
})

export class MatchViewRoutingModule {}
