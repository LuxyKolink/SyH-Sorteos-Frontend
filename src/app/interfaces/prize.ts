import { Category } from "./category";
import { Client } from "./client";
import { User } from "./user";

export interface Prize {
    id: number,
    company: Client,
    name: string,
    img: string,
    category: Category,
    status: "Activo" | "Inactivo" | "Eliminado",
    quantity: number,
    creator: User,
}