import { Injectable } from '@angular/core';
import { Raffle } from '../interface/raffle';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {

  constructor() { }

  baseUrl = 'http://localhost:3500/raffle';
  
  async getAllRaffles(): Promise<Raffle[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }

  async getRaffleById(id: number): Promise<Raffle | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  // submitApplication(firstName: string, lastName: string, email: string) {
  //   // tslint:disable-next-line
  //   console.log(firstName, lastName, email);
  // }
}
