import { Component, OnInit } from "@angular/core";
import { CollaboratorDto } from "../../models/CollaboratorDto";
import { LoginStorageService } from "../../services/login-storage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  usuario: CollaboratorDto;
  usuarioRed: string = "";
  mensajeBienvenida: string = "";

  constructor(private loginStorageService: LoginStorageService) {}

  ngOnInit() {
    if (this.loginStorageService.isUserLoggedIn()) {
      this.usuario = this.loginStorageService.getLoggedInUser();
      this.usuarioRed = this.usuario.UsuarioRed;
      this.mensajeBienvenida = "Bienvenido " + this.usuario.UsuarioRed + " !";
    } else {
      this.mensajeBienvenida = "Bienvenido anonimo!";
    }
  }
}
