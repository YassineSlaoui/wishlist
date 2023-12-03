import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenieService {
  private data: any[] = [
    { id: 1, name: "Desiree", price: 1000 },
    { id: 2, name: "Ghalib", price: 5000 },
    { id: 3, name: "Chandra", price: 1200 }
  ];

  constructor() { }

  getAllGenies() {
    return of(this.data);
  }

  getGenie(id: number) {
    return of(this.data.find(p => p.id == id));
  }
}
