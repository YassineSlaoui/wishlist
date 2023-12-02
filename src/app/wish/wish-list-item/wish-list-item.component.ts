import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../../shared/models/wishItem';
import { EventService } from '../../../shared/Services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wish!: WishItem;

  constructor(private events: EventService) {

  }

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.wish.isComplete };
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

}
