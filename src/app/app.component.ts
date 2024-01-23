import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MotokoService } from './services/motoko.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  updating = false

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

}
