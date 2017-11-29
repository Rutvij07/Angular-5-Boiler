import { Component, OnInit } from '@angular/core';
import { BuilderService } from '../../builder/builder.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-addbuilder',
  templateUrl: './addbuilder.component.html',
  styleUrls: ['./addbuilder.component.scss'],
  providers: [BuilderService]
})
export class AddbuilderComponent implements OnInit {
 groupName:string;
 companyName:string;
 partner:string;
 companyAdd:string;
 gst:number;
 pan:number;
 tin:number;
 email:string;
 website:string;
 companyPersonName:string;
 contactPersonName:string;
 userName:string;
 password:any;
 
 builderDetails:any;
 builderResponse:any;
  constructor( private builder:BuilderService) { }

  ngOnInit() {
  }

  add(groupName,companyname,partner,companyadd,gst,pan,tin,website,email,company_person_name,contact_person_name,username,password){
    this.builderDetails = {
      groupName : this.groupName,
      companyName:this.companyName,
      partner:this.partner,
      companyAdd:this.companyAdd,
      gst:this.gst,
      pan:this.pan,
      tin:this.tin,
      website:this.website,
      email:this.email,
      companyPersonName:this.companyPersonName,
      contactPersonName:this.contactPersonName,
      password:this.password,
      userName:this.userName,
    }
    console.log(this.builderDetails);
        
    this.builder.addDetails(this.builderDetails)
    .subscribe(
      	data => { 
      		this.builderResponse=data;
      		console.log(this.builderResponse);
      	 },
      	error => {
      		console.log(error);
      	}
      )
       
  }


}
