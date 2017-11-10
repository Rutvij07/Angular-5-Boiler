import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const homepageRoutes : Routes = [
]

@NgModule({
  imports: [ RouterModule.forChild(homepageRoutes) ],
  exports: [ RouterModule ]
})

export class HomePageRoutingModule {}
