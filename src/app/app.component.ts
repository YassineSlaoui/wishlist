import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular Framework :)'),
    new WishItem('Get Coffee', true),
    new WishItem('Do Good')
  ];

  listFilter: any = '0';

  newWishText = ''; //This is litterally bound to the New Wish Text Input field using the [(ngModel)] Directive

  title = 'Wishlist';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[Number.parseInt(this.listFilter)]);
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    console.log("Item \"" + item.wishText + "\" was previously " + item.isComplete);
    item.isComplete = !item.isComplete;
    console.log("Now is " + item.isComplete);
  }
}
