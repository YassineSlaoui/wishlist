import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wishlist';
  items: WishItem[] = [
    new WishItem('Learn Angular Framework :)'),
    new WishItem('Get Coffee', true),
    new WishItem('Do Good')
  ];

  toggleItem(item: WishItem) {
    console.log("Item \"" + item.wishText + "\" was previously " + item.isComplete);
    item.isComplete = !item.isComplete;
    console.log("Now is " + item.isComplete);
  }
}
