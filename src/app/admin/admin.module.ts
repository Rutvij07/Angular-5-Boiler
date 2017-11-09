import { NgModule } from '@angular/core';

 //module
 import { SharedModule } from '../sharedmodule/shared.module';
 import { AdminRoutingModule } from './admin.routing.module';


//components
import { TournamentComponent } from './tournament/tournament.component';
import { AdminComponent } from './admin.component';
import { MatchComponent } from './match/match.component';
import { LandingComponent } from './landing/landing.component'


@NgModule({

	declarations: [
    TournamentComponent,
    AdminComponent,
    MatchComponent,
    LandingComponent
  ],
	imports: [
	 SharedModule,
   AdminRoutingModule
	],
	providers: [

  ]
})
export class AdminModule { }
