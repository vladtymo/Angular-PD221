import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  removeEvent = new EventEmitter<number>();

  changeRole() {
    this.user.admin = !this.user.admin;
  }

  remove() {
    this.removeEvent.emit(this.user.id);
  }
}
