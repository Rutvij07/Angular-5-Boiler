import { NgModule } from '@angular/core';

 //module
 import { SharedModule } from '../sharedmodule/shared.module';
 import { HomePageRoutingModule } from './homepage.routing.module';


//components
import {HomePageComponent} from './homepage.component'

@NgModule({

	declarations: [
    HomePageComponent
],
	imports: [
    SharedModule,
    HomePageRoutingModule
	],
	providers: [

  ]
})
export class HomePageModule { }
