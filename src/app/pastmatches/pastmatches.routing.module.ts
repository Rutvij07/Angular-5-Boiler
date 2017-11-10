import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const pastmatchRoutes : Routes = [
]

@NgModule({
  imports: [ RouterModule.forChild(pastmatchRoutes) ],
  exports: [ RouterModule ]
})

export class PastMatchRoutingModule {}
