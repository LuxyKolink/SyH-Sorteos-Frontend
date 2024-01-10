import { Component, Input } from '@angular/core';
import { Raffle } from '../../data/raffle/interface/raffle';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() raffle!:Raffle;
}
