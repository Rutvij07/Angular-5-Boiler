import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//components
import { LandingComponent } from './landing/landing.component'
import { AppComponent } from './app.component';

//modules
import { SharedModule } from './sharedmodule/shared.module';






//routing modules
import { AppRoutingModule } from './app-routing.module';



@NgModule({
	declarations:
	[
		AppComponent,
		LandingComponent,
	],
	imports:
	[
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule
   ],

	bootstrap: [AppComponent]
})
export class AppModule { }
