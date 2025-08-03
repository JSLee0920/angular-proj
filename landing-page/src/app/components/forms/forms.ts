import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  @Output() userCreated = new EventEmitter<User>();

  newUser: User = {
    name: '',
    position: '',
  };

  submitForm() {
    if (this.newUser.name && this.newUser.position) {
      this.userCreated.emit({ ...this.newUser });
      this.newUser = { name: '', position: '' }; // Reset form
    }
  }
}
