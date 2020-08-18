import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {
  public constructor(private app: AppService, private router: Router) { }

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.app.initiliazed && state.url !== '/') {
      this.router.navigateByUrl('');
    } else if (this.app.initiliazed && state.url === '/') {
      this.router.navigateByUrl('/artnet');
    }

    return true;
  }
}
