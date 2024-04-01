import { Client } from "./client";

export interface Policy {
    id: number,
    company: Client,
    policy: string,
}