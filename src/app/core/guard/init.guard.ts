import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {
  public constructor(private state: StateService, private router: Router) { }

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.state.initiliazed && state.url !== '/') {
      this.router.navigateByUrl('');
    } else if (this.state.initiliazed && state.url === '/') {
      this.router.navigateByUrl('/artnet');
    }

    return true;
  }
}
