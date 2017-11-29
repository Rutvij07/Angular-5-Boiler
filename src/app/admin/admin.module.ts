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
import { ManagebuilderComponent } from 'app/admin/builder/managebuilder/managebuilder.component';
import { AuthGuard } from 'app/auth/auth.guard';
import { AuthService } from 'app/auth/auth.service';


@NgModule({

	declarations: [
		AdminComponent,
		DashboardComponent,		
		LoginComponent,
		ManagebuilderComponent,
  ],
	imports: [
	 SharedModule,
	 AdminRoutingModule,
	 MatFormFieldModule,
	 HttpModule
	],
	providers: [ AuthGuard,AuthService]
})
export class AdminModule { }
