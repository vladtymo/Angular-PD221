import { Component } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  // todo: make as an input paramteter
  user: IUser = {
    id: 101,
    name: "Vlad Tymoshchuk",
    email: "vtymo@gmail.com",
    admin: true
  }
}
