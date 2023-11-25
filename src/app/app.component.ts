import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

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

  listFilter: String = '0';

  newWishText = ''; //This is litterally bound to the New Wish Text Input field using the [(ngModel)] Directive

  title = 'Wishlist';

  visibleItems: WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
    this.filterChanged(this.listFilter);
  }

  filterChanged(value: any) {
    console.log(value);
    if (this.listFilter === '0')
      this.visibleItems = this.items;
    else if (this.listFilter === '1')
      this.visibleItems = this.items.filter(item => !item.isComplete)
    else
      this.visibleItems = this.items.filter(item => item.isComplete)
  }

  toggleItem(item: WishItem) {
    console.log("Item \"" + item.wishText + "\" was previously " + item.isComplete);
    item.isComplete = !item.isComplete;
    console.log("Now is " + item.isComplete);
    this.filterChanged(this.listFilter);
  }
}
