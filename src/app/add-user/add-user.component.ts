import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  @Output() addEvent = new EventEmitter<IUser>();

  // -------- reactive form
  // creationForm = new FormGroup({
  //   id: new FormControl(0),
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   admin: new FormControl(''),
  //   birthdate: new FormControl('')
  // });
  creationForm = this.fb.group({
    id: [0],
    name: ['', Validators.minLength(3)],
    email: ['', Validators.email],
    admin: [false],
    birthdate: [new Date()]
  });

  constructor(private fb: FormBuilder) {
  }

  create(): void {
    // check model is valid
    if (!this.creationForm.valid) {
      alert("Invalid data!");
      return;
    }

    // get created user
    const user = this.creationForm.value as IUser;
    console.log(user);

    // sent it to parent component
    this.addEvent.emit(user);
  }
}
