import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {

  @Output() filterChanged = new EventEmitter<any>();

  ngOnInit(): void {
    this.changeFilter();
  }

  listFilter: any = '0';

  changeFilter() {
    this.filterChanged.emit(filters[this.listFilter]);
  }

}
