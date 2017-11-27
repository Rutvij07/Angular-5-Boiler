import { NgModule } from '@angular/core';

//modules
import { Routes, RouterModule } from '@angular/router';

//components
import {AdminComponent} from './admin.component'
import { LoginComponent } from 'app/admin/login/login.component';



const adminRoutes : Routes = [
  { path: '', component:  AdminComponent,children:[
    {path:'', component: LoginComponent}
  ] }
]

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})

export class AdminRoutingModule {}
