import { NgModule } from '@angular/core';

//modules
import { PastMatchRoutingModule } from './pastmatches.routing.module';
import { SharedModule } from '../sharedmodule/shared.module';

//components
import { PastMatchComponent } from './pastmatches.component';
import { SearchComponent } from './search/search.component';

@NgModule({
	declarations: [
  PastMatchComponent,
  SearchComponent
	],
	imports: [
    PastMatchRoutingModule,
		SharedModule
	],
	providers: [

  ]
})
export class PastMatchModule { }
