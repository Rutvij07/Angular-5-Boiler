import { NgModule } from '@angular/core';

//modules
import { SharedModule } from '../sharedmodule/shared.module';
import {LiveMatchRoutingModule} from './livematches.routing.module'

//components
import {LiveMatchComponent} from './livematches.component';

@NgModule({
	declarations: [
	LiveMatchComponent
],
	imports: [
  SharedModule,
	LiveMatchRoutingModule
	],
	providers: [

  ]
})
export class LiveMatchModule { }
