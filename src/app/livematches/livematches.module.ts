import { NgModule } from '@angular/core';

//modules
import { LiveMatchRoutingModule } from './livematches.routing.module';
import { SharedModule } from '../sharedmodule/shared.module';

//components
import { LiveMatchComponent } from './livematches.component';
import { SportComponent } from './sport/sport.component';

@NgModule({
	declarations: [
  LiveMatchComponent,
	SportComponent
	],
	imports: [
	LiveMatchRoutingModule,
  SharedModule
	],
	providers: [

  ]
})
export class LiveMatchModule { }
