import { Category } from "./category";
import { City } from "./city";
import { Client } from "./client";
import { Raffle } from "./raffle";

export interface Participant {
    id?: number,
    ref: string,
    company: Client,
    raffle: Raffle,
    name: string,
    category: Category,
    location: City,
    email: string,
    phoneNumber: string,
}