import { NgModule } from '@angular/core';

 //module
 import { SharedModule } from '../sharedmodule/shared.module';
 import { AdminRoutingModule } from './admin.routing.module';



//components
import {AdminComponent} from './admin.component'


@NgModule({

	declarations: [
    AdminComponent
  ],
	imports: [
	 SharedModule,
   AdminRoutingModule
	],
	providers: [

  ]
})
export class AdminModule { }
