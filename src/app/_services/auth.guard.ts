import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,
  Router,
   UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
        canActivate(route: ActivatedRouteSnapshot): boolean {
          const token = localStorage.getItem("token");
          if (!token) {
            this.router.navigate(["/login"]);
            return false;
          }
          return true;
        }
      }
