import { Injectable, inject } from '@angular/core';
import { Raffle } from '../interfaces/raffle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {

  private http = inject( HttpClient )
  constructor() {

    console.log('Cargando data');
    
   }

  baseUrl = 'http://localhost:3500/raffle';
  
  async getAllRaffles2(): Promise<Raffle[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }

  getAllRaffles(): Observable<Raffle[]> {
    return this.http.get<Raffle[]>(this.baseUrl);
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
