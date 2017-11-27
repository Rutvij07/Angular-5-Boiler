import { NgModule } from '@angular/core';

 //module
 import { SharedModule } from '../sharedmodule/shared.module';
 import { AdminRoutingModule } from './admin.routing.module';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import { HttpModule } from '@angular/http';
 



//components
import {AdminComponent} from './admin.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from 'app/admin/login/login.component';


@NgModule({

	declarations: [
		AdminComponent,
		DashboardComponent,		
		LoginComponent
  ],
	imports: [
	 SharedModule,
	 AdminRoutingModule,
	 MatFormFieldModule,
	 HttpModule
	],
	providers: [

  ]
})
export class AdminModule { }
