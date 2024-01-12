import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../../features/paginator/paginator.component';
import { TableComponent } from '../../features/table/table.component';
import { Raffle } from '../../data/raffle/interface/raffle';
import { RaffleService } from '../../data/raffle/service/raffle.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PaginatorComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  raffleList: Raffle[] = []
  raffleService: RaffleService = inject(RaffleService);

  constructor(){
    this.raffleService.getAllRaffles().then((raffleList: Raffle[]) => {
      this.raffleList = raffleList;
    })
  }

}