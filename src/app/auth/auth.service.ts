import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService{

  result: any;
  abc:any
  constructor(private _http: Http){}

  checkForAuth(details){
    return this._http.post('auth/userData',details)
      .map(data=>{
        this.abc = data;
        console.log('auth service'+data.json())
        return data.json();
      });     

  }
  

}
