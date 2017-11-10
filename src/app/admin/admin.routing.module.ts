import { NgModule } from '@angular/core';

//modules
import { Routes, RouterModule } from '@angular/router';

//components



const adminRoutes : Routes = [
    
]

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})

export class AdminRoutingModule {}
