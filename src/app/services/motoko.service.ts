import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// const motokoCreateActor = require('../../declarations/motoko').createActor;
import { createActor as azleActor } from '../../declarations/azle_hello_world/index.js';

@Injectable({
  providedIn: 'root'
})
export class MotokoService {
  motokoActor = azleActor(environment.azle_hello_world, {
    agentOptions: {
      host: environment.host
    }
  });

  async getMessage() {
    return await this.motokoActor.getMessage();
  }

  async setMessage(message: string) {
    return await this.motokoActor.setMessage(message);
  }


}