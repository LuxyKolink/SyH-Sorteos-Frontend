import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Raffle } from '../../data/raffle/interface/raffle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() raffle!:Raffle;
}
