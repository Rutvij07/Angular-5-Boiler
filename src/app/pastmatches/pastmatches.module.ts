import { NgModule } from '@angular/core';

//modules
import { SharedModule } from '../sharedmodule/shared.module';
import { PastMatchRoutingModule } from './pastmatches.routing.module';


//components
import {PastMatchComponent} from './pastmatches.component'

@NgModule({
	declarations: [
		PastMatchComponent
	],
	imports: [
		SharedModule,
		PastMatchRoutingModule
	],
	providers: [

  ]
})
export class PastMatchModule { }
