import { Category } from "./category"
import { Client } from "./client"
import { Participant } from "./participant"
import { Policy } from "./policy"
import { Prize } from "./prize"
import { Type } from "./type"
import { User } from "./user"

export interface Raffle {
    id?: number,
    company: Client,
    title: string,
    category: Category,
    status: number,
    creator: User,
    type: Type,
    prizes: Prize[],
    startDate: Date,
    startTime: Date,
    endDate: Date,
    endTime: Date,
    conditions: string,
    policy: Policy[],
    participants: Participant[],
    winners: Participant[],
}