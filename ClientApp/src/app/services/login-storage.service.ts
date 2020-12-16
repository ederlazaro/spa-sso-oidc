import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { CollaboratorDto } from "../models/CollaboratorDto";
import { StorageService } from "./storage.service";

@Injectable()
export class LoginStorageService {
  readonly userKey = "user";

  constructor(
    private storageService: StorageService,
    private oauthService: OAuthService
  ) {}

  isUserLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  setLoggedInUser(userModel: CollaboratorDto) {
    return this.storageService.store(this.userKey, userModel);
  }

  getLoggedInUser(): CollaboratorDto {
    return this.getCurrentUser();
  }

  getUsuario() {
    var objetoUsuario = this.storageService.retrieve(this.userKey);
    return objetoUsuario.ColaboradorId;
  }

  logOutUser() {
    this.storageService.remove(this.userKey);
    this.oauthService.logOut();
  }

  private getCurrentUser() {
    return this.storageService.retrieve(this.userKey);
  }
}
