import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';

@Injectable()
export class BuilderService {

  constructor( private _http:Http) { }

   
  addDetails(builderDetails){
    console.log("inside Builder service")
    console.log(builderDetails);

    return this._http.post('builderApi/builderDetails',builderDetails)
    .map(data=>{
      return data.json();
    });

  } 
}
