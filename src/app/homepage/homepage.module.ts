import { NgModule } from '@angular/core';

 //module
 import { SharedModule } from '../sharedmodule/shared.module';
 import { HomePageRoutingModule } from './homepage.routing.module';


//components
import { HomePageComponent } from './homepage.component'
import { ViewComponent } from './view/view.component';
import { ViewdialogComponent } from './viewdialog/viewdialog.component'

@NgModule({
	entryComponents: [ViewdialogComponent],

	declarations: [
   HomePageComponent,
	 ViewComponent,
	 ViewdialogComponent,
],
	imports: [
   HomePageRoutingModule,
	 SharedModule,
	],
	providers: [

  ]
})
export class HomePageModule { }
