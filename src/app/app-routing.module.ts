import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '' , redirectTo: '/homepage', pathMatch: 'full'},
	{ path: 'livematch' , redirectTo: '/livematch', pathMatch: 'full'},
	{ path: 'pastmatch' , redirectTo: '/pastmatch', pathMatch: 'full'},
	{ path: 'matchview' , redirectTo: '/matchview', pathMatch: 'full'},
	{ path: 'admin' , redirectTo: '/admin', pathMatch: 'full'},




];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
