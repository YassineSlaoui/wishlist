import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishComponent } from './wish.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WishComponent
  ],
  exports: [
    WishComponent
  ]
})

export class WishModule { }