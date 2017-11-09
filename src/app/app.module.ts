import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';

//modules
import { HomePageModule } from './homepage/homepage.module';
import { LiveMatchModule } from './livematches/livematches.module';
import { PastMatchModule } from './pastmatches/pastmatches.module';
import { MatchViewModule } from './matchview/matchview.module';
import { AdminModule } from './admin/admin.module';





//routing modules
import { AppRoutingModule } from './app-routing.module'



@NgModule({
	declarations:
	[
		AppComponent,
	],
	imports:
	[
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HomePageModule,
		LiveMatchModule,
		PastMatchModule,
		MatchViewModule,
		 AdminModule 
   ],

	bootstrap: [AppComponent]
})
export class AppModule { }
