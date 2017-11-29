import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/admin/login/login.service';
import { HttpModule } from '@angular/http';
import {Router} from '@angular/router';


import {Observable} from 'rxjs/Rx';
import { AuthService } from 'app/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }

  username:any;
	password:any; 
	adminDetails:any;
	userName:any;
	passWord:any;
	adminResponse:any;

	constructor(private authService:AuthService, private adminService : LoginService,private route:Router){}

	submitInfo(username,password){
		this.adminDetails = {
			userName:this.username,
			passWord: this.password
		};
		this.adminService.postUserInfo(this.adminDetails) 
		.subscribe(
			data => { 
				this.adminResponse=data;
				console.log(this.adminResponse);
			 },
			error => {
				console.log(error);
			}
		   )
		   
		   this.authService.checkForAuth(this.adminDetails) 
		   .subscribe(
			   data => { 
				   this.adminResponse=data;
				   console.log(this.adminResponse);
				},
			   error => {
				   console.log(error);
			   }
			  )
           
	
			
		
	}
}
