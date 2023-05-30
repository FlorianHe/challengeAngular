import { Component } from '@angular/core';
import { UserQuote } from '../userQuote';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  public isVisible = true;

  user = new UserQuote('Doe', 'John', 25, 'test', 'https://randomuser.me/api/portraits/lego/2.jpg');


  showAge() {
    this.isVisible = !this.isVisible;
  }
}
