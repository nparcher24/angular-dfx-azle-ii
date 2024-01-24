import { Injectable } from '@angular/core';
import { AuthClient } from "@dfinity/auth-client";
import { ActorSubclass, Identity } from "@dfinity/agent";
import { createActor as createMotokoActor } from "../../declarations/motoko/index";
import { createActor as createAzleActor } from "../../declarations/azle_hello_world/index";
import { environment } from '../../environments/environment';
import { _SERVICE as _MOTOKO_SERVICE } from '../../declarations/motoko/motoko.did';
import { _SERVICE as _AZLE_SERVICE } from '../../declarations/azle_hello_world/azle_hello_world.did';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private motokoActor: null | ActorSubclass<_MOTOKO_SERVICE> = null;
  private azleActor: null | ActorSubclass<_AZLE_SERVICE> = null;

  identity: Identity | null = null;

  constructor() { }

  async whoami() {
    return await this.azleActor?.whoAmI() ?? null;
  }

  async signIn() {
    const authClient = await AuthClient.create()
    await new Promise<void>((resolve) => {
      authClient.login({
        identityProvider: environment.production ? "https://identity.ic0.app" : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:8000`,
        onSuccess: () => resolve(),
      });
    });
    this.identity = authClient.getIdentity();
    this.motokoActor = createMotokoActor(environment.motoko, {
      agentOptions: {
        host: environment.host,
        identity: this.identity
      }
    });

    this.azleActor = createAzleActor(environment.azle_hello_world, {
      agentOptions: {
        host: environment.host,
        identity: this.identity
      }
    });

    console.log("Identity: ", this.identity);
  }
}
