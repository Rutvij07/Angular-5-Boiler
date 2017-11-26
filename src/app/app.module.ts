import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';






//modules
import { SharedModule } from './sharedmodule/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


//routing modules
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

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
		SharedModule,
		MatExpansionModule,
		MatCardModule,
		MatButtonModule

   ],

	bootstrap: [AppComponent]
})
export class AppModule { }
