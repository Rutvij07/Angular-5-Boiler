import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AuthGuard implements CanActivate {
  details:any;
  constructor(private authService:AuthService , private route:Router){}
  canActivate(route:ActivatedRouteSnapshot,
      state:RouterStateSnapshot):Observable<boolean> { 
      
        return this.authService.checkForAuth(this.details);

    }
  
}
  
