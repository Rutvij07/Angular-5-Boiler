import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  LiveMatchComponent } from './livematches.component';



const livematchRoutes : Routes = [
    { path: 'livematch', component:  LiveMatchComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(livematchRoutes) ],
  exports: [ RouterModule ]
})

export class LiveMatchRoutingModule {}
