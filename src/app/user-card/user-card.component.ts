import { Component, Input } from '@angular/core';
import { IUser } from '../user';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { FirstUpperPipe } from "../first-upper.pipe";

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
  imports: [UpperCasePipe, DatePipe, LowerCasePipe, FirstUpperPipe]
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
