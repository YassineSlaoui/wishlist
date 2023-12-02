import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from '../shared/Services/EventService';
import { WishService } from './wish/wish.service';
import { WishModule } from './wish/wish.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WishModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      console.log(wish);
      this.items.splice(this.items.indexOf(wish), 1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe({
      next: (value: any) => {
        this.items = value;
      },
      error: (err: any) => {
        alert(err.message);
      }
    });
  }

  filter: any = () => { };
}
