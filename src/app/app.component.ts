import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    WishModule,
    ContactModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private router: Router) {
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

}
