import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser } from './user';
import { UserCardComponent } from './user-card/user-card.component';

// decorator (like attribute in C#)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // properties
  title = 'To-Do List Application';


  // event handlers

}
