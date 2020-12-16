import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { routes } from "./app-routing.module";

import { HomeComponent } from "./modules/home/home.component";
import { AuthComponent } from "./modules/auth/auth.component";
import { NotfoundComponent } from "./modules/notfound/notfound.component";
import { OAuthModule } from "angular-oauth2-oidc";

import { StorageService } from "./services/storage.service";
import { LoginStorageService } from "./services/login-storage.service";
import { ExternalComponent } from "./modules/external/external.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ExternalComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    OAuthModule.forRoot(),
  ],
  providers: [StorageService, LoginStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
