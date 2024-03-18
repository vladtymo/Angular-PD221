import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser, USERS } from './user';
import { UserCardComponent } from './user-card/user-card.component';
import { AddUserComponent } from "./add-user/add-user.component";

// decorator (like attribute in C#)
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, UserCardComponent, AddUserComponent]
})
export class AppComponent {
  // properties
  title = 'To-Do List Application';
  users: IUser[] = USERS;

  constructor() {
    console.log(this.users);

  }

  // event handlers
  removeUser(id: number): void {
    let index = this.users.findIndex(x => x.id === id);

    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  addUser(user: IUser): void {
    user.id = this.users.length + 1; // generate new id
    this.users.push(user);
  }
}
