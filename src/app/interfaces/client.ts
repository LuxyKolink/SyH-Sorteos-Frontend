import { City } from "./city";

export interface Client {
    id: number,
    identifier: string,
    email: string,
    company: string,
    logo: string,
    location: City,
    contactName: string,
    phoneNumber: string,
}