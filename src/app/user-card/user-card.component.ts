import { Component, Input } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input()
  user: IUser = {
    id: 0,
    name: "",
    email: "",
    admin: false
  }
}
