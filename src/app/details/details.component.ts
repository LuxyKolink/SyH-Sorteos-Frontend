import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RaffleService } from '../services/raffle.service';
import { Raffle } from '../interfaces/raffle';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  raffleService = inject(RaffleService);
  raffle: Raffle | undefined;

  constructor() {
    const raffleId = parseInt(this.route.snapshot.params['id'], 10);
      
      this.raffleService.getRaffleById(raffleId).then((raffle) => {
        this.raffle = raffle
      })
  }
}
