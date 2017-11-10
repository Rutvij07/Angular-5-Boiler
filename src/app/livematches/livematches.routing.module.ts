import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const livematchRoutes : Routes = [
]

@NgModule({
  imports: [ RouterModule.forChild(livematchRoutes) ],
  exports: [ RouterModule ]
})

export class LiveMatchRoutingModule {}
