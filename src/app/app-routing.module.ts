import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
{ path: '' , component:LandingComponent},
{ path: 'homepage' , loadChildren:'./homepage/homepage.module#HomePageModule'},
{ path: 'livematch' , loadChildren:'./livematches/livematches.module#LiveMatchModule'},
{ path: 'pastmatch' , loadChildren:'./pastmatches/pastmatches.module#PastMatchModule'},
{ path: 'matchview' , loadChildren:'./matchview/matchview.module#MatchViewModule'},
{ path: 'admin' , loadChildren:'./admin/admin.module#AdminModule'},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
