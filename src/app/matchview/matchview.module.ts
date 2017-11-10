import { NgModule } from '@angular/core';

//modules
import { SharedModule } from '../sharedmodule/shared.module';
import { MatchViewRoutingModule } from './matchview.routing.module';


//components
import {MatchViewComponent} from './matchview.component'

@NgModule({
	declarations: [
		MatchViewComponent
	],
	imports: [
	SharedModule,
  MatchViewRoutingModule ],
	providers: [

  ]
})
export class MatchViewModule { }
