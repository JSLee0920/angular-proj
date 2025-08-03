import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cards } from './components/cards/cards';
import { User } from './models/user';
import { Forms } from './components/forms/forms';

@Component({
  selector: 'app-root',
  imports: [Cards, Forms],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users: User[] = [];

  onUserCreated(user: User) {
    this.users.push(user);
  }
}
