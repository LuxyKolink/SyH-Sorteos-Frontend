import { Component } from '@angular/core';
import { PaginatorComponent } from '../../features/paginator/paginator.component';
import { TableComponent } from '../../features/table/table.component';
import { Raffle } from '../../data/raffle/interface/raffle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PaginatorComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  raffle: Raffle = {
    id: 1,
    company: 1,
    title: 'Rifa casa',
    category: 'Casa',
    status: 'Abierto',
    creator: 'Santiago',
    type: 'Kids',
    prizes: [],
    startDate: new Date(),
    startTime: new Date(),
    endDate: new Date(),
    endTime: new Date(),
    conditions: 'Solo afiliados',
    policy: [],
    participants: [],
    winners: []
  };
}
