import { Component, OnInit } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { JwksValidationHandler } from "angular-oauth2-oidc-jwks";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { LoginStorageService } from "../../services/login-storage.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  mensaje: string = "Autenticando...";

  constructor(
    private oauthService: OAuthService,
    private loginStorageService: LoginStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.oauthService.configure({
      redirectUri: window.location.origin,
      clientId: environment.Adfs.ClientId,
      requireHttps: false,
      loginUrl: environment.Adfs.Url + "/oauth2/authorize",
      issuer: environment.Adfs.Url,
      scope: "openid profile email",
      responseType: "id_token token",
      oidc: true,
      logoutUrl:
        environment.Adfs.Url +
        "/ls/?wa=wsignoutcleanup1.0&wreply=" +
        location.protocol +
        "//" +
        location.hostname +
        (location.port ? ":" + location.port : ""),
      postLogoutRedirectUri:
        location.protocol +
        "//" +
        location.hostname +
        (location.port ? ":" + location.port : ""),
    });

    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    console.log(environment);

    console.log("inicio del servicio");

    console.log("hasValidAccessToken", this.oauthService.hasValidAccessToken());

    if (!this.oauthService.hasValidAccessToken()) {
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
        if (!this.oauthService.hasValidAccessToken()) {
          console.log("token no valido.");
          this.oauthService.initImplicitFlow();
        } else {
          console.log("logueo satisfactorio!");
          var obj = {
            identity: this.oauthService.getIdentityClaims(),
            token: this.oauthService.getAccessToken(),
            idtoken: this.oauthService.getIdToken(),
          };
          console.log(obj);
          this.getUser();
        }
      });
    } else {
      this.getUser();
    }
  }

  getUser() {
    this.mensaje = "Obteniendo sus datos, un momento porfavor.";

    console.log("User", { User: this.name() });

    // Llamar algunos APIs para obtener datos para continuar al home o redireccionar al portal antiguo...
    
    this.loginStorageService.setLoggedInUser({
      ColaboradorId: 0,
      NombreCompleto: "Oscar Lazaro",
      UsuarioRed: "elazaro",
      Correo: "elazaro@belcorp.biz",
      PaisId: 11,
      Pais: "PE",
      Compania: "202018",
      Tipo: 1,
      SedeId: 0,
    });

    this.mensaje = "Redirigiendo...";

    this.router.navigate(["/home"]);
  }

  name() {
    let retorno: string;
    let claims: any = this.oauthService.getIdentityClaims();
    console.log(claims);

    if (!claims) return null;

    retorno = claims.unique_name;
    retorno = retorno.indexOf("\\") > -1 ? retorno.split("\\")[1] : retorno;

    return retorno;
  }
}
