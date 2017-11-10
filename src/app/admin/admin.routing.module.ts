import { NgModule } from '@angular/core';

//modules
import { Routes, RouterModule } from '@angular/router';

//components
import {AdminComponent} from './admin.component'



const adminRoutes : Routes = [
  { path: '', component:  AdminComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})

export class AdminRoutingModule {}
