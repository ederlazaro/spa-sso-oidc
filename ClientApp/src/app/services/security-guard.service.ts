import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginStorageService } from "./login-storage.service";

@Injectable({
  providedIn: "root",
})
export class SecurityGuardService implements CanActivate {
  constructor(
    private router: Router,
    private loginStorageService: LoginStorageService
  ) {
    console.log("validar login");
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.loginStorageService.isUserLoggedIn()) {
      console.log("redirecciona por que no esta logueado en el servicio");
      this.router.navigate([""]);
      return false;
    }
    console.log("logueado!");
    return true;
  }
}
