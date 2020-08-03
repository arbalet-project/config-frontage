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
    if (this.app.initiliazed) {
      this.router.navigateByUrl('/artnet/frontage');
      return true;
    } else {
      this.router.navigateByUrl('/artnet/creation');
      return true;
    }
  }
}
