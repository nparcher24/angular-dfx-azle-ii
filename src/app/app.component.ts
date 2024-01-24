import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MotokoService } from './services/motoko.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  message = ""
  textInput = ""
  motokoService = inject(MotokoService)
  authService = inject(AuthService)
  updating = false
  myId = ""

  // constructor() {
  //   console.log("Calling test")
  //   // this.motokoService.test().then((result) => {
  //   //   this.title = result
  //   // });
  // }

  getMessage() {
    this.updating = true
    this.motokoService.getMessage().then((result) => {
      this.message = result
      this.updating = false
    });
  }

  setMessage() {
    this.updating = true
    this.motokoService.setMessage(this.textInput).then((result) => {
      this.updating = false
      this.textInput = ""
      this.getMessage()
    })

  }

  async login() {
    this.updating = true
    await this.authService.signIn()
    await this.whoami()
    this.updating = false
  }

  async whoami() {
    this.authService.whoami().then((result) => {
      this.myId = result?.toString() ?? ''
    })

  }
}
