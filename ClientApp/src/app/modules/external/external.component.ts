import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginStorageService } from "src/app/services/login-storage.service";

@Component({
  selector: "app-external",
  templateUrl: "./external.component.html",
  styleUrls: ["./external.component.css"],
})
export class ExternalComponent implements OnInit {
  mensajeBienvenida: string = "Validando token...";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginStorageService: LoginStorageService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      let token = params["token"];
      console.log("token", token);

      //Logica para validar el token...

      if (token) {
        this.mensajeBienvenida = "Redireccionando...";

        this.loginStorageService.setLoggedInUser({
          ColaboradorId: 0,
          NombreCompleto: "Externo",
          UsuarioRed: "extusuario",
          Correo: "extusuario@belcorp.biz",
          PaisId: 11,
          Pais: "PE",
          Compania: "202018",
          Tipo: 1,
          SedeId: 0,
        });

        this.router.navigate(["/home"]);
      } else {
        this.mensajeBienvenida = "Token incorrecto";
      }
    });
  }
}
