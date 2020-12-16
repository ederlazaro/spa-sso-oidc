import { Routes } from "@angular/router";
import { ExternalComponent } from "./modules/external/external.component";
import { HomeComponent } from "./modules/home/home.component";
import { AuthComponent } from "./modules/auth/auth.component";
import { NotfoundComponent } from "./modules/notfound/notfound.component";
import { SecurityGuardService } from "./services/security-guard.service";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "external",
    component: ExternalComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [SecurityGuardService],
    runGuardsAndResolvers: "always",
  },
  {
    path: "404",
    component: NotfoundComponent,
  },
  // {
  //   path: "**",
  //   redirectTo: "/404",
  // },
];
export class AppRoutingModule {}
