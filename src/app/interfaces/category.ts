import { Client } from "./client"

export interface Category {
    id?: number,
    company: Client,
    name: string,
    desc: string
}