import { NgModule } from '@angular/core';

 //module
 import { SharedModule } from '../sharedmodule/shared.module';
 import { AdminRoutingModule } from './admin.routing.module';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import { HttpModule } from '@angular/http';
 import {MatExpansionModule} from '@angular/material/expansion';
 
 



//components
import {AdminComponent} from './admin.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from 'app/admin/login/login.component';
import { AddbuilderComponent } from '../admin/builder/addbuilder/addbuilder.component';
import { ManagebuilderComponent } from '../admin/builder/managebuilder/managebuilder.component';


@NgModule({

	declarations: [
		AdminComponent,
		DashboardComponent,		
		LoginComponent,
		AddbuilderComponent,
		ManagebuilderComponent,
  ],
	imports: [
	 SharedModule,
	 AdminRoutingModule,
	 MatFormFieldModule,
	 HttpModule,
	 MatExpansionModule
	],
	providers: [

  ]
})
export class AdminModule { }
