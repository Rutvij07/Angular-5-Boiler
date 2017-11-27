import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  details:any;

  constructor(private _http : Http) { }

  postUserInfo(details){
    console.log('inside service');
    console.log(details);
    return this._http.post('auth/userData',details)
    .map(data=>{
      return data.json();
    });
  }
}
