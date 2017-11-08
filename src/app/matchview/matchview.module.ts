import { NgModule } from '@angular/core';

//modules
import { MatchViewRoutingModule } from './matchview.routing.module';
import { SharedModule } from '../sharedmodule/shared.module';
import { ChartsModule } from 'ng2-charts';

//components
import { MatchViewComponent } from './matchview.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
	declarations: [
  MatchViewComponent,
  GraphComponent
	],
	imports: [
	MatchViewRoutingModule,
  SharedModule,
	ChartsModule
	],
	providers: [

  ]
})
export class MatchViewModule { }
