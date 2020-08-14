import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../core/app.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {
  public constructor(private app: AppService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(state.url)
    if(!this.app.initiliazed && state.url !== '/') {
      this.router.navigateByUrl('');
      console.log("test");
    } else if(this.app.initiliazed && state.url == '/') {
      this.router.navigateByUrl('/artnet');
      console.log("test 2");
    }

    return true;
  }
}
