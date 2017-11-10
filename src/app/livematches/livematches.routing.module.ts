import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import {LiveMatchComponent} from './livematches.component'


const livematchRoutes : Routes = [
  { path: '', component:  LiveMatchComponent }

]

@NgModule({
  imports: [ RouterModule.forChild(livematchRoutes) ],
  exports: [ RouterModule ]
})

export class LiveMatchRoutingModule {}
