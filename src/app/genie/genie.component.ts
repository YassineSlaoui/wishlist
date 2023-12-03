import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenieService } from './genie.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-genie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './genie.component.html',
  styleUrl: './genie.component.css'
})
export class GenieComponent {
  genies: any[] = [];

  constructor(private genieStore: GenieService) {

  }

  ngOnInit(): void {
    this.genieStore.getAllGenies().subscribe((genies) => { this.genies = genies })
  }
}
