import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../../features/paginator/paginator.component';
import { TableComponent } from '../../features/table/table.component';
import { Raffle } from '../../interfaces/raffle';
import { RaffleService } from '../../services/raffle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PaginatorComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  raffleList$!: Observable<Raffle[]>;
  raffleService: RaffleService = inject(RaffleService);

  constructor() {
    // this.raffleService.getAllRaffles().then((raffleList: Raffle[]) => {
    //   this.raffleList = raffleList;
    // })
    
    // this.raffleService.getAllRaffles();
  }

  ngOnInit(): void {
    this.raffleList$ = this.raffleService.getAllRaffles()
  }

}