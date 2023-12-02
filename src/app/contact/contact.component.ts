import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  senderNameControl = new FormControl('');
  senderEmailControl = new FormControl('');
  senderMessageControl = new FormControl('');

  submitForm() {
    if (this.senderNameControl.dirty)
      alert('Name changed')
  }

}
