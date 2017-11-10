import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';

//modules
import { SharedModule } from './sharedmodule/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';






//routing modules
import { AppRoutingModule } from './app-routing.module';



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
		SharedModule
   ],

	bootstrap: [AppComponent]
})
export class AppModule { }
