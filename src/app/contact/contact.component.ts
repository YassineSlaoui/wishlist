import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { invalidEmailDomain } from './invalidEmailDomain';

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

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain(['gmail.com', 'yahoo.com'])]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  // isValid(controlName: string): any {
  //   let control = this.contactForm.get(controlName);
  //   console.log(control?.errors);

  //   return control?.errors == null ? true : control?.errors['keys']()[0][0];
  // }

  submitForm() {


    // console.log(this.contactForm.get('senderName'));

    // console.log(this.isValid('senderName'));

    // console.log(this.contactForm);
    // console.log(this.contactForm.get('senderEmail')?.errors);

    // if (this.senderNameControl.dirty)
    //   alert('Name changed')
  }

}
