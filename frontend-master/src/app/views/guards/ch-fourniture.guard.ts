import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChFournitureGuard implements CanActivateChild {
  constructor(private as:AuthService,private route:Router){

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve,reject)=>{
        if(this.as.roleChFour()==true){
          resolve(true)
        }
        else {
          this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}})
          resolve(false)
        }
      })
  }

}
