import { NgModule } from '@angular/core';

//modules
import { Routes, RouterModule } from '@angular/router';

//components
import {  AdminComponent } from './admin.component';
import {TournamentComponent} from '../admin/tournament/tournament.component'
import {MatchComponent} from '../admin/match/match.component'
import {LandingComponent} from '../admin/landing/landing.component'



const adminRoutes : Routes = [
    { path: 'admin', component:  AdminComponent , children:[
      {path:'',component: LandingComponent },      
      {path:'tournament',component: TournamentComponent },
      {path:'match',component: MatchComponent },

    ] }
]

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})

export class AdminRoutingModule {}
