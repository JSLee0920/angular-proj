import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, NgFor],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() users: User[] = [];
}
