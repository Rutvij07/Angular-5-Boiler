import { NgModule } from '@angular/core';

//modules
import { Routes, RouterModule } from '@angular/router';

//components
import {AdminComponent} from './admin.component'
import {DashboardComponent} from '../admin/dashboard/dashboard.component'
import { LoginComponent } from 'app/admin/login/login.component';
import { ManagebuilderComponent } from 'app/admin/builder/managebuilder/managebuilder.component';
import { AuthGuard } from 'app/auth/auth.guard';



const adminRoutes : Routes = [
  { path: '',  component:  AdminComponent , children : [
   { path: '', component: LoginComponent },
   { path: 'dashboard', component: DashboardComponent },
   {path: 'manage', component: ManagebuilderComponent},
  
  ] },  
 
]

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})

export class AdminRoutingModule {}
