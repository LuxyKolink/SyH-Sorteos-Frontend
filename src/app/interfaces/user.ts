import { Client } from "./client";
import { Role } from "./role";

export interface User {
    id: number,
    company: Client,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    roles: Role,
}