import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components
import {HomePageComponent} from './homepage.component'

const homepageRoutes : Routes = [
  { path: '', component:  HomePageComponent }

]

@NgModule({
  imports: [ RouterModule.forChild(homepageRoutes) ],
  exports: [ RouterModule ]
})

export class HomePageRoutingModule {}
