import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Input() @Output() wishes: WishItem[] = [];

  newWishText = '';

  addNewWish() {
    this.wishes.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}
