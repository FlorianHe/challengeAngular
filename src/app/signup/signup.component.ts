import { Component } from '@angular/core';

import { User } from '../user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  model = new User('', '', '', '')
  onSubmit() {
    console.log(`User créé ! Prénom : ${this.model.firstname}, Nom : ${this.model.lastname}, Email : ${this.model.email}, Password : quand même pas!!`)
  }
}
