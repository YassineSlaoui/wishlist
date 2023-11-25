import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes: WishItem[] = [];

  toggleItem(item: WishItem) {
    console.log("Item \"" + item.wishText + "\" was previously " + item.isComplete);
    item.isComplete = !item.isComplete;
    console.log("Now is " + item.isComplete);
  }
}
