import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  @Input() wishText!: string;

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.fulfilled };
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

}
