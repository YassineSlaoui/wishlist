import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishModule } from './wish.module';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/Services/EventService';
import { WishService } from './wish.service';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [CommonModule, WishFilterComponent, WishListComponent, AddWishFormComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
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
