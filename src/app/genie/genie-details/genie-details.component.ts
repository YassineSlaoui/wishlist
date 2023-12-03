import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { GenieService } from '../genie.service';

@Component({
  selector: 'app-genie-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './genie-details.component.html',
  styleUrl: './genie-details.component.css'
})
export class GenieDetailsComponent implements OnInit {

  genie: any = {};

  constructor(private genieStore: GenieService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map: ParamMap) => {
      let id = map.get('id');
      if (id)
        this.genieStore.getGenie(parseInt(id)).subscribe((genie: any) => this.genie = genie)
    })
  }

}
